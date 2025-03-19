import {
  FaExternalLinkAlt,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";

export const Info = () => {
  return (
    <section className="flex flex-col gap-2 lg:max-w-[600px] w-full md:gap-10">
      <div>
        <h3 className="uppercase text-xl font-bold mb-5">Contacto</h3>
        <div>
          <a href="mailto:easp0104@gmail.com" className="contact-info">
            <FiMail />
            <div>
              <h4 className="text-gray">Correo</h4>
              <p>easp0104@gmail.com</p>
            </div>
          </a>
          <a href="tel:+51912905731" className="contact-info">
            <LuPhone />
            <div>
              <h4 className="text-gray">Número</h4>
              <p>+51 912905731</p>
            </div>
          </a>
          <a href="https://maps.app.goo.gl/PQVmrPvtDEEx4q7o8" className="contact-info">
            <MdOutlineLocationOn />
            <div>
              <h4 className="text-gray">Ubicación</h4>
              <p>Lima, Perú</p>
            </div>
          </a>
        </div>
      </div>
      <div>
        <h3 className="uppercase text-xl font-bold mb-5">Redes Sociales</h3>
        <div className="grid auto-rows-auto gap-5 xl:auto-cols-auto">
          <a href="https://www.linkedin.com/in/elena-suarez-paredes/"
            className="xl:col-span-2 social-info 
               hover:bg-gradient-to-r from-[#0a66c273] to-[#b0d2e456]">
            <div>
              <FaLinkedinIn className="text-2xl lg:text-3xl" />
              <div>
                <p>Conectemos!</p>
                <span>En LinkedIn</span>
              </div>
            </div>
            <FaExternalLinkAlt className="social-link" />
          </a>
          <a href="https://www.instagram.com/_lenasp"
            className="social-info hover:bg-gradient-to-r from-[#833ab449] via-[#cd1b3c89] to-[#e6860098]">
            <div> 
              <FaInstagram className="text-2xl lg:text-3xl" />
              <div>
                <p>Instagram</p>
                <span>@_lenasp</span>
              </div>
            </div>
            <FaExternalLinkAlt className="social-link" />
          </a>
          <a href="https://github.com/Lenas25" 
          className="social-info hover:bg-gradient-to-r from-[#00000049] via-[#00000049] to-[#2c2c2c98]">
            <div>
              <FaGithub className="text-2xl lg:text-3xl" />
              <div>
                <p>Github</p>
                <span>@Lenas25</span>
              </div>
            </div>
            <FaExternalLinkAlt className="social-link" />
          </a>
        </div>
      </div>
    </section>
  );
};
