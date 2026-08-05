import BookingForm from "@/components/services/BookingForm";

export default async function BookOnline({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: link } = await params;
  return (
    <div className="flex flex-col h-full w-full py-[20vh] bg-black/90">
      <h1 className="text-white text-sh1 md:text-lh1 mx-24 font-bold italic underline text-center">
        Book Online
      </h1>
      <BookingForm link={link} />
    </div>
  );
}
