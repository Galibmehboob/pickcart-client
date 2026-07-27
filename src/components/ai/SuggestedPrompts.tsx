"use client";

interface Props {
  onSelect: (text: string) => void;
}

const prompts = [
  "Recommend products under £20",
  "Best products for hair",
  "Compare available products",
  "Best deals today",
];

export default function SuggestedPrompts({
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="rounded-full border px-3 py-2 text-xs hover:bg-default-100"
        >
          {item}
        </button>
      ))}
    </div>
  );
}