import React from "react";
import { AccordionItem } from "./AccordionItem";
import Link from "next/link";

const Accordion = ({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) => {
  return (
    <>
      <div className="grid gap-2 md:gap-4">
        {questions.map((q) => (
          <AccordionItem
            question={q.question}
            answer={q.answer}
            key={q.question}
          />
        ))}
      </div>

      <p className="text-center text-black-200 mt-4">
        If you have any other questions, feel free to
        <Link href="#contact" className="text-purple-500 font-bold">
          {" "}
          contact us.
        </Link>
      </p>
    </>
  );
};

export default Accordion;
