"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = (event) => {
    if (selected) {
      setLastSelected(selected);
      setSelected(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [selected]);

  return (
    <div className="w-full h-full lg:px-32 grid grid-cols-4 m-auto gap-5 lg:gap-10 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={(e) => {
              e.stopPropagation(); // Prevent the event from bubbling up to the document click handler
              handleClick(card);
            }}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "selected-card rounded-lg cursor-pointer fixed inset-0 h-1/2 w-3/4 m-auto z-50 flex justify-center items-center flex-wrap"
                : lastSelected?.id === card.id
                ? "z-40 bg-transparent rounded-xl lg:rounded-3xl h-full w-full"
                : "bg-transparent rounded-xl lg:rounded-3xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }) => {
  return (
    <div>{card.thumbnail}</div>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-center items-center rounded-lg shadow-2xl relative z-[60] selected-card">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute h-full w-full bg-transparent z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative h-1/2 w-full md:h-[405px] md:w-[540px] lg:h-[450px] lg:w-[600px] items-center justify-center px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

export default LayoutGrid;
