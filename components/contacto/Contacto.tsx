import { Form } from "./Form";
import { Info } from "./Info";

export const Contacto = () => {
  return (
    <main className="flex flex-col md:flex-row gap-20 justify-center p-5 md:py-20 md:px-10 lg:px-20 w-full">
      <Info />
      <Form />
    </main>
  );
};
