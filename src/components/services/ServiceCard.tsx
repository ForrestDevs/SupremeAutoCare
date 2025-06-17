import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CircleDollarSignIcon, Hourglass } from "lucide-react";

interface CardProps {
  title: string;
  time: string;
  price: string;
  callLink: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  description?: string;
}

export default function ServiceCard({ ...props }: CardProps) {
  return (
    <div className="card w-full shadow-2xl rounded-xl bg-white overflow-hidden">
      <figure className="h-auto max-h-72 w-full overflow-hidden">
        <Image
          src={props.imageSrc}
          alt={props.imageAlt}
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl uppercase font-bold mb-2">
          {props.title}
        </h2>
        
        {props.description && (
          <p className="text-gray-600 text-sm mb-4">
            {props.description}
          </p>
        )}
        
        <div className="flex flex-row items-center gap-2 text-slate-600 mb-2">
          <Hourglass size={18} />
          <p className="uppercase text-sm">{props.time}</p>
        </div>

        <div className="flex flex-row items-center gap-2 text-slate-600 mb-4">
          <CircleDollarSignIcon size={18} />
          <p className="uppercase text-sm">Starting: {props.price}</p>
        </div>

        <div className="card-actions justify-end">
          <Link 
            href={`services/${props.callLink}`}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
