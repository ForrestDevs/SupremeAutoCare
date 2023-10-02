import BookingForm from "@/components/services/BookingForm";

export default function BookOnline({ params }: { params: { id: string } }) {
  const link: string = params.id;
  return (
    <div className="flex flex-col h-full w-full py-[20vh] bg-black/90">
      <h1 className="text-white text-sh1 md:text-lh1 mx-24 font-bold italic underline text-center">
        Book Online
      </h1>
      <BookingForm link={link} />
    </div>
  );
}
