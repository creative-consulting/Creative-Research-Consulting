"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically load the map only on the client
const WorldMapClient = dynamic(() => import("./world-map-client"), {
  ssr: false,
  loading: () => <p className="text-center">Loading map...</p>,
});

export default function WorldMapWrapper() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Global Presence</h2>
      <WorldMapClient />
    </section>
  );
}
