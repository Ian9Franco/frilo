"use client";

import dynamic from "next/dynamic";

const DeerScene = dynamic(() => import("./DeerScene").then((mod) => mod.DeerScene), { ssr: false });
const CrestScene = dynamic(() => import("./DeerScene").then((mod) => mod.CrestScene), { ssr: false });

export function DeerCanvas({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <DeerScene />
    </div>
  );
}

export function CrestCanvas({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <CrestScene />
    </div>
  );
}
