import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  bookNowLink: string;
  readMoreLink: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export default function Card({ ...props }: CardProps) {
  return (
    <div className="card w-auto glassBg">
      <figure>
        <Image
          src={props.imageSrc}
          alt={props.imageAlt}
          width={450}
          height={450}
          priority
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <p className="underline">Read More</p>
        <div className="card-actions justify-end">
          <button className="btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}
