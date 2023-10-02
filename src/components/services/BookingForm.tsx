"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/custom/Dialog";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { ScrollArea } from "../custom/ScrollArea";

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
    <div className="p-16 w-full">
      <Cal
        calLink={`supremedetailing/${link}`}
        style={{ width: "100%", height: "100%", overflow: "scroll", margin: 0 }}
        config={{ layout: "month_view" }}
      />
    </div>

    // <Dialog>
    //   <DialogTrigger>
    //     <p className="btn">Book Now</p>
    //   </DialogTrigger>
    //   <DialogContent>
    //     <div className="m-4">
    //       <ScrollArea>

    //       </ScrollArea>
    //     </div>
    //   </DialogContent>
    // </Dialog>
  );
}
