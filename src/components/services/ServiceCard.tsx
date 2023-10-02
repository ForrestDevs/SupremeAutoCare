import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BookingForm from "./BookingForm";
import { CircleDollarSignIcon, Clock, Hourglass } from "lucide-react";

interface CardProps {
  title: string;
  time: string;
  price: string;
  callLink: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export default function ServiceCard({ ...props }: CardProps) {
  return (
    <div className="card w-full shadow-2xl rounded-xl">
      <figure className="h-auto max-h-72 w-auto max-w-72">
        <Image
          src={props.imageSrc}
          alt={props.imageAlt}
          width={400}
          height={400}
          priority
        />
      </figure>
      <div className="card-body">
        <h2 className="text-sh3 md:text-lh3 uppercase font-bold">{props.title}</h2>
        <div className="flex flex-row items-center gap-2 text-slate-600">
          <Hourglass size={18}  />
          <p className="uppercase">{props.time}</p>
        </div>

        <div className="flex flex-row items-center gap-2 text-slate-600">
          <CircleDollarSignIcon size={18} />
          <p className="uppercase">Starting: {props.price}</p>
        </div>

       
        <div className="card-actions justify-end">
          <BookingForm calLink={props.callLink} />
        </div>
      </div>
    </div>
  );
}
