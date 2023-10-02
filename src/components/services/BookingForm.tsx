"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface BookingFormProps {
  link: string;
}

export default function BookingForm({ link }: BookingFormProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#fffff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="p-8 w-full h-full">
      <Cal
        calLink={`supremedetailing/${link}`}
        style={{ width: "100%", height: "100%", overflow: "scroll", margin: 0 }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
