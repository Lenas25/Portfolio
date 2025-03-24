"use client";

import { IoSend } from "react-icons/io5";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { PiShareNetwork } from "react-icons/pi";

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Form = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSending(true);
    setResponseMessage(null);

    try {
      const response = await fetch("./api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Mensaje enviado con éxito!");
        reset();
      } else {
        setResponseMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setResponseMessage(`Error: ${error}`);
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setResponseMessage(null);
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:max-w-[700px] flex flex-col gap-5 justify-center w-full">
      <div />
      <div className="flex gap-2 justify-center md:justify-between items-center mb-5">
        <h1 className="text-4xl font-bold text-center flex gap-2 items-center flex-wrap justify-center md:flex-nowrap md:justify-start">
          Trabajemos <span className="uppercase text-purple"> Juntos!</span>
        </h1>
        <PiShareNetwork className="text-purple text-5xl hidden md:flex"/>
      </div>
      <div className="flex flex-col gap-5 flex-wrap">
        <div className="flex flex-wrap gap-5">
          <input
            type="text"
            placeholder="Nombre Completo *"
            className="contact-input"
            {...register("name", {
              required: {
                value: true,
                message: "Por favor, ingrese su nombre",
              },
            })}
          />
          <input
            type="text"
            placeholder="Correo *"
            className="contact-input"
            {...register("email", {
              required: {
                value: true,
                message: "Por favor, ingrese su correo",
              },
              pattern: /^\S+@\S+$/i,
            })}
          />
        </div>
        <input
          type="text"
          placeholder="Asunto *"
          className="contact-input"
          {...register("subject", {
            required: {
              value: true,
              message: "Por favor, ingrese el asunto",
            },
          })}
        />
        <textarea
          placeholder="Mensaje *"
          className="contact-input"
          {...register("message", {
            required: {
              value: true,
              message: "Por favor, ingrese el mensaje",
            },
          })}
        />
      </div>
      {errors && (
        <div className="text-red-400">
          {errors.name?.message ||
            errors.email?.message ||
            errors.subject?.message ||
            errors.message?.message}
        </div>
      )}
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="mt-5 bg-purpleLight text-black rounded-lg px-5 py-2 font-bold flex gap-2 items-center group text-xl">
          {!isSending ? (
            !responseMessage ? (
              <>
                Enviar Mensaje
                <IoSend className="group-hover:translate-x-1 transition duration-300 ease-in-out" />
              </>
            ) : responseMessage.startsWith("Error") ? (
              <span className="text-red-950">Error al enviar</span>
            ) : (
              <span className="text-green-950">{responseMessage}</span>
            )
          ) : (
            
            <span className="text-yellow-950">Enviando...</span>
          )}
        </button>
      </div>
    </form>
  );
};
