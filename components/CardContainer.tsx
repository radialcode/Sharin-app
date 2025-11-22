import Button from "@/stories/ components/Button";
import Card from "@/stories/ components/Card";
import { CARD_DEFAULTS } from "@/utils/helper";
import React from "react";

const CardContainer = () => {
  return (
    <>
      <div className="max-w-[640px] px-5 mx-auto flex justify-center flex-col items-center min-h-[calc(100vh-150px)] ">
        <div>
          <h2 className="text-[56px] max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:pt-4 font-bold text-center leading-[100%] font-fk-screamer uppercase mb-0">
            Inizia a vendere
          </h2>
          <p className=" text-center text-base text-black mb-8 font-inter">
            Un set di prodotti scelti per darti la spinta giusta da subito.
          </p>
          <div className="relative pb-5">
            <div className="h-[500px] max-md:h-[375px] overflow-hidden ">
              <div className="overflow-y-auto overflow-x-hidden h-full">
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 gap-y-6">
                  {CARD_DEFAULTS.map((card, index) => (
                    <Card key={index} card={card} />
                  ))}
                </div>
                <div className="absolute w-full bottom-0 left-0">
                  <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_100%)] pointer-events-none w-full h-12"></div>
                  <div className="bg-white flex w-full gap-1.5 flex-col">
                    <Button text="Salta" variant="primary" />
                    <Button text="Indietro" variant="secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
