"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full items-center justify-center ml-10 overflow-hidden pt-8 space-y-2">
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        
        <p className="text-3xl font-semibold">1. Se connecter</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
        Connectez-vous avec nous lors d'une réunion
          <Link href={"/meeting"} className="text-[#3b82f6]">
            {" "}
            meeting{" "}
          </Link>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">2. Collaborer</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
        Définir l'étendue du projet
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">3. Créez</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">Laissez le reste entre nos mains</h2>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;