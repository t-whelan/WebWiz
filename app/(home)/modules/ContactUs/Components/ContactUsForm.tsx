"use client";

import { sendMessage } from "@/app/actions";
import Button from "@/components/Button";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import responseMessages from "@/utils/response-messages";

const ContactUsForm = () => {
  const [state, formAction] = useFormState(sendMessage, {
    message: "",
  });
  return (
    <form
      action={formAction}
      className="p-6 bg-white shadow-sm rounded-lg text-black"
    >
      <div className="space-y-2">
        <p className="font-extrabold">
          Name
          <input
            name="name"
            type="text"
            required
            className="w-full p-2 bg-gray-200 rounded-lg"
          />
        </p>
      </div>

      <div className="space-y-2">
        <p className="font-extrabold">
          Company
          <input
            name="company"
            type="text"
            required
            className="w-full p-2 bg-gray-100 rounded-lg"
          />
        </p>
      </div>

      <div className="space-y-2">
        <p className="font-extrabold">
          Email
          <input
            name="email"
            type="email"
            required
            className="w-full p-2 bg-gray-100 rounded-lg"
          />
        </p>
      </div>

      <div className="space-y-2">
        <p className="font-extrabold">
          Message
          <textarea
            name="message"
            required
            className="w-full p-2 bg-gray-100 rounded-lg"
          />
        </p>
      </div>
      {state.message && (
        <p aria-live="polite" className={`${state.message === responseMessages.success ? "text-green-500": "text-red-500"}`}>
          {state.message}
        </p>
      )}
      <div className="flex justify-center">
      <SubmitButton />
        </div>
      
    </form>
  );
};

export const SubmitButton = () =>{
  const {pending} = useFormStatus()
  return(
   
    <Button disabled={pending} />
    
  )
}

export default ContactUsForm;
