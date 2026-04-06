"use client";
export default function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/uploads/pdf/Creative_Consulting_Bangladesh_Panel-Book.pdf";
    link.download = "Creative_Consulting_Bangladesh_Panel-Book.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="group relative w-[40px] h-[40px] rounded-full flex flex-col items-center justify-center bg-primary/10 cursor-pointer transition-all duration-300"
    >
      {/* SVG Icon */}
      <svg
        className="w-[1em] h-[1em] fill-[#d91c5c] transition-all duration-300 
        group-hover:fill-[#d91c5c]
        group-hover:animate-[slide-in-top_0.6s_cubic-bezier(0.25,0.46,0.45,0.94)_both]"
        viewBox="0 0 384 512"
      >
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
      </svg>
      {/* Bottom line */}
      <span className="w-[18px] h-[5px] border-b-2 border-l-2 border-r-2 border-[#d91c5c] transition-all duration-300 group-hover:border-[#d91c5c]"></span>

      {/* Tooltip */}
      <span className="absolute left-[-100px] opacity-0 bg-[#0c0c0c] text-white text-sm px-2 py-1 rounded-md pointer-events-none transition-all duration-300 group-hover:opacity-100">
        Download
        <span className="absolute w-[10px] h-[10px] bg-[#0c0c0c] rotate-45 right-[-5px] top-1/2 -translate-y-1/2"></span>
      </span>
    </button>
  );
}
