"use client";

import { useEffect } from "react";

export default function WhatsAppConversionTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a[href*="wa.me"]');
      if (target && typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", "conversion", {
          send_to: "AW-18149142385/Ii_NCPzljsgcEPHel85D",
        });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
