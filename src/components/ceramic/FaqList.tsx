interface FaqListProps {
  items: Array<{ question: string; answer: string }>;
}

/**
 * Native <details> accordion — no client JavaScript needed.
 */
export default function FaqList({ items }: FaqListProps) {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-gray-700">
          <summary className="flex items-center justify-between gap-6 cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
            <span className="text-white text-sh4 md:text-lh4">{item.question}</span>
            <span className="text-[#ED1C24] text-sh3 md:text-lh3 shrink-0 transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="text-slate-400 text-sp2 md:text-lp2 max-w-3xl pb-6">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
