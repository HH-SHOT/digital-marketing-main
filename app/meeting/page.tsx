"use client";


import Calendly from "./calendly";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {



  return (
    
    <div className=" flex flex-col w-full overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
       <div><ShowcaseNavbar/></div> 
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10   ">Rencontrons-nous</h1>
          <p className="text-lg text-gray-500 py-4">
          Nous sommes toujours ravis de rencontrer de nouvelles personnes et de discuter de nouveaux projets.
          N&apos;hésitez pas à prendre rendez-vous avec nous. 
          </p>

          {[
                {
                  title: "Développement & Conception",
                  description:
                    "Transformez vos idées en réalité grâce à nos services de développement et de conception.",
                },

                {
                  title: "Consultation gratuite",
                  description:
                    "Obtenez des conseils d'experts pour améliorer votre entreprise et augmenter votre présence en ligne.",
                },
                {
                  title: "Support technique",
                  description:
                    "Bénéficiez d'un support technique pour votre site web ou application.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
        </div>
                
    <div className="md:w-1/2">
      <Calendly />
      </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
    
  );
};

export default Meeting;
