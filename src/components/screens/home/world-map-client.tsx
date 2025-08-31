"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

const createCustomIcon = (color: string) => {
  return L.divIcon({
    html: `
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.16344 0 0 7.16344 0 16C0 28 16 40 16 40C16 40 32 28 32 16C32 7.16344 24.8366 0 16 0Z" fill="${color}"/>
        <circle cx="16" cy="14" r="6" fill="white"/>
      </svg>
    `,
    className: "",
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });
};

const officeIcon = createCustomIcon("#10b981");
const clientIcon = createCustomIcon("#6366f1");

// Types

type LocationType = "client" | "office";

interface Location {
  id: string;
  name: string;
  coords: [number, number];
  type: LocationType;
  region?: string;
}

// Data

const locations: Location[] = [
  {
    id: "bd-1",
    name: "Bangladesh",
    coords: [23.685, 90.3563],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "cn-1",
    name: "China",
    coords: [35.8617, 104.1954],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "hk-1",
    name: "Hong Kong",
    coords: [22.3193, 114.1694],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "in-1",
    name: "India",
    coords: [20.5937, 78.9629],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "bd-office",
    name: "Dhaka Office",
    coords: [23.685, 90.3563],
    type: "office",
    region: "Asia Pacific",
  },
  {
    id: "ae-1",
    name: "United Arab Emirates",
    coords: [23.4241, 53.8478],
    type: "client",
    region: "Middle East",
  },
];

const FitBounds: React.FC<{ bounds: L.LatLngBoundsExpression }> = ({
  bounds,
}) => {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map, bounds]);
  return null;
};

const getFlagEmoji = (countryName: string) => {
  const flags: Record<string, string> = {
    Bangladesh: "🇧🇩",
    China: "🇨🇳",
    "Hong Kong": "🇭🇰",
    India: "🇮🇳",
    "United Arab Emirates": "🇦🇪",
    "Dhaka Office": "🇧🇩",
  };
  return flags[countryName] || "📍";
};

const CustomPopup: React.FC<{ location: Location }> = ({ location }) => {
  return (
    <div className="p-2">
      <div className="flex items-center gap-2">
        <span className="text-lg">{getFlagEmoji(location.name)}</span>
        <h4 className="font-semibold text-gray-800">{location.name}</h4>
      </div>
      <div
        className={`mt-1 text-sm px-2 py-1 rounded-full inline-block ${
          location.type === "client"
            ? "bg-indigo-100 text-indigo-800"
            : "bg-emerald-100 text-emerald-800"
        }`}
      >
        {location.type === "client" ? "Client" : "Our Office"}
      </div>
      {location.region && (
        <div className="mt-2 text-xs text-gray-500">
          Region: {location.region}
        </div>
      )}
    </div>
  );
};

const MapFilter: React.FC<{
  activeFilter: LocationType | "all";
  setActiveFilter: (filter: LocationType | "all") => void;
}> = ({ activeFilter, setActiveFilter }) => (
  <div className="absolute top-4 right-4 z-[1000] bg-white rounded-lg shadow-md p-2 flex gap-2">
    {["all", "client", "office"].map((type) => (
      <button
        key={type}
        onClick={() => setActiveFilter(type as LocationType | "all")}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          activeFilter === type
            ? type === "client"
              ? "bg-indigo-500 text-white"
              : type === "office"
              ? "bg-emerald-500 text-white"
              : "bg-blue-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        {type === "all"
          ? "All"
          : type.charAt(0).toUpperCase() + type.slice(1) + "s"}
      </button>
    ))}
  </div>
);

const WorldMap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<LocationType | "all">("all");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const filteredLocations = locations.filter((loc) => {
    const matchesFilter = activeFilter === "all" || loc.type === activeFilter;
    const matchesRegion = !selectedRegion || loc.region === selectedRegion;
    return matchesFilter && matchesRegion;
  });

  const regions = Array.from(new Set(locations.map((l) => l.region))).filter(
    Boolean
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            Our Global Presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Serving clients across multiple regions with dedicated offices
            worldwide
          </motion.p>
        </div>

        <div className="h-[600px] w-full rounded-xl shadow-lg overflow-hidden relative border border-gray-200">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <FitBounds
              bounds={L.latLngBounds(
                filteredLocations.map((loc) => loc.coords as L.LatLngTuple)
              )}
            />
            {filteredLocations.map((location) => (
              <Marker
                key={location.id}
                position={location.coords}
                icon={location.type === "client" ? clientIcon : officeIcon}
                eventHandlers={{
                  mouseover: (e) => e.target.openPopup(),
                  mouseout: (e) => e.target.closePopup(),
                }}
              >
                <Popup className="custom-popup" closeButton={false}>
                  <CustomPopup location={location} />
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <MapFilter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          {regions.length > 0 && (
            <div className="absolute bottom-4 left-4 z-[1000] bg-white rounded-lg shadow-md p-2">
              <select
                value={selectedRegion || ""}
                onChange={(e) => setSelectedRegion(e.target.value || null)}
                className="px-3 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Regions</option>
                {regions.map((region) => (
                  <option key={region} value={region!}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
