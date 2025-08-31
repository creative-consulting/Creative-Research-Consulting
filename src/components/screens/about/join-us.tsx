"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { List } from "@/components/ui/list";
import { JoinUsData } from "@/types/about";
import toast from "react-hot-toast";
import axios from "axios";
// import RainbowButton from "@/components/3d/rainbow-button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  fieldOfInterest: string | string[]; // allow for checkbox group
  message?: string;
  file: File | null;
}

const JoinUs = ({ data }: { data: JoinUsData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  // If you need local state, rename it to avoid conflict, e.g. formData
  // const [formData, setFormData] = useState<JoinUsData>(data);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    fieldOfInterest: [],
    message: "",
    file: null,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] },
    },
    hidden: { opacity: 0, y: 50 },
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement;
    const { name, value, type } = target;
    if (type === "file" && target instanceof HTMLInputElement) {
      setFormData({
        ...formData,
        [name]: target.files ? target.files[0] : null,
      });
    } else if (type === "checkbox" && target instanceof HTMLInputElement) {
      const checked = target.checked;
      const prev = formData[name as keyof FormData];
      let updated: string[];
      if (Array.isArray(prev)) {
        if (checked) {
          updated = [...prev, value];
        } else {
          updated = prev.filter((v) => v !== value);
        }
      } else {
        updated = checked ? [value] : [];
      }
      setFormData({ ...formData, [name]: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key as keyof FormData] instanceof File) {
        formDataToSend.append(key, formData[key as keyof FormData] as File);
      } else if (Array.isArray(formData[key as keyof FormData])) {
        (formData[key as keyof FormData] as string[]).forEach((item) => {
          formDataToSend.append(key, item);
        });
      } else {
        formDataToSend.append(key, formData[key as keyof FormData] as string);
      }
    }

    try {
      console.log("Sending form data:", process.env.NEXT_PUBLIC_BASE_API_URL);

      const response = await axios.post("/api/join/with-us", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Log the response for debugging
      // toast.promise(
      //   response,
      //   {
      //     loading: "Submitting your profile...",
      //     success: "Profile submitted successfully!",
      //     error: "Failed to submit profile.",
      //   },
      //   {
      //     position: "top-right",
      //     duration: 3000,
      //     style: {
      //       background: "#333",
      //       color: "#fff",
      //     },
      //   }
      // );

      console.log("Response:", response);

      if (response.status === 200) {
        toast.success("Your profile has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          fieldOfInterest: [],
          message: "",
          file: null,
        });
      } else {
        toast.error("Failed to submit your profile. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting your profile.");
    }
  };

  return (
    <section ref={ref} className="sm:py-12 py-7 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            className="text-center sm:mb-8 mb-5"
          >
            <h2 className="sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-4">
              {data.heading}
            </h2>
            <p className="text-gray-600 mb-6 sm:text-base text-sm">
              {data.text}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.2 }}
            className="sm:mb-8 mb-5"
          >
            <h3 className="sm:text-xl text-base text-center font-semibold mb-4">
              Opportunities Include:
            </h3>
            <List className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-1 mb-6 sm:text-base text-sm">
              {data.opportunities.map((opp, index) => (
                <li key={index} className="flex justify-center">
                  <span className="text-primary mr-2 sm:block hidden">•</span>
                  <span>{opp}</span>
                </li>
              ))}
            </List>
          </motion.div>

          <motion.form
            initial="hidden"
            animate={controls}
            onSubmit={handleSubmit}
            variants={variants}
            transition={{ delay: 0.4 }}
            className="space-y-4 sm:p-8 p-4 bg-gray-50 rounded-lg shadow-xl"
          >
            {data.formFields.map((field, index) => (
              <div key={index} className="space-y-2">
                <label className="block text-gray-700">{field.label}</label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={
                      typeof formData[field.name as keyof FormData] === "string"
                        ? (formData[field.name as keyof FormData] as string)
                        : ""
                    }
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    {field.options?.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "checkbox-group" ? (
                  <div className="flex flex-wrap gap-4">
                    {field.options?.map((option, i) => (
                      <label key={i} className="flex items-center">
                        <input
                          onChange={handleChange}
                          value={option}
                          checked={
                            Array.isArray(
                              formData[field.name as keyof FormData]
                            ) &&
                            (
                              formData[field.name as keyof FormData] as string[]
                            ).includes(option)
                          }
                          name={field.name}
                          type="checkbox"
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ) : field.type === "textarea" ? (
                  <textarea
                    value={
                      typeof formData[field.name as keyof FormData] === "string"
                        ? (formData[field.name as keyof FormData] as string)
                        : ""
                    }
                    onChange={handleChange}
                    name={field.name}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                ) : field.type === "file" ? (
                  <input
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    type="file"
                    name={field.name}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                ) : (
                  <input
                    value={
                      typeof formData[field.name as keyof FormData] === "string"
                        ? (formData[field.name as keyof FormData] as string)
                        : ""
                    }
                    onChange={handleChange}
                    type={field.type}
                    name={field.name}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-primary cursor-pointer text-white sm:px-32 px-12 sm:py-3 py-2.5 flex justify-self-center rounded hover:bg-primary transition"
            >
              {data.submitText}
            </button>
            {/* <RainbowButton className="sm:!w-[350] sm:!py-3 !py-[8px]" /> */}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
