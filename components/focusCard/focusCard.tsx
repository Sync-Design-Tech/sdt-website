"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import StackIcon from "tech-stack-icons";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "md:h-30 relative h-20 w-full overflow-hidden rounded-lg transition-all duration-300 ease-out dark:bg-neutral-300",
        hovered !== null && hovered !== index && "scale-[0.98] blur-sm",
      )}
    >
      <div className="flex h-full w-full items-center justify-center">
        <StackIcon style={{ width: "80%", height: "80%" }} name={card.src} />
      </div>
      <div
        className={cn(
          "absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-lg font-extrabold text-transparent md:text-lg">
          {card.title}
        </div>
      </div>
    </div>
  ),
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-10 md:grid-cols-6 md:px-8">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
