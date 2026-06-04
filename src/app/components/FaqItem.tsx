"use client";
import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e8e6e0]" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        className="w-full bg-transparent border-0 text-left py-7 flex justify-between items-center cursor-pointer text-[15px] font-semibold hover:text-[#6b6860] transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span itemProp="name">{question}</span>
        <span className={`text-2xl transition-transform duration-300 flex-shrink-0 ml-4 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className={`faq-answer text-[15px] text-[#6b6860] leading-[1.8] ${open ? "open" : ""}`}
        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
      >
        <span itemProp="text">{answer}</span>
      </div>
    </div>
  );
}
