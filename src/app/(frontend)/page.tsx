import { Section1, Section2, Section3, Section4, Section5, Section6 } from "@/components/homeSections";
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('Supreme Auto Care | Home', 'UNMATHCED QUALITY,UNFORGETTABLE SHINE');

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 />

      <Section6 />
    </main>
  );
}
