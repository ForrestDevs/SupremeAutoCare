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
  calLink: string;
}

export default function BookingForm({ calLink }: BookingFormProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <p className="btn">Book Now</p>
      </DialogTrigger>
      <DialogContent>
        <div className="m-4">
          <ScrollArea>
            <Cal
              calLink={`supremedetailing/${calLink}`}
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
