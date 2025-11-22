import Card from "@/stories/ components/Card";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Button from "@/stories/ components/Button";
import { CARD_DEFAULTS } from "@/utils/helper";



export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[640px] px-5 mx-auto flex justify-center flex-col items-center min-h-[calc(100vh-80px-52px)]">
        <h2 className="text-[56px] max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:pt-4 font-bold text-center mb-4 font-fk-screamer uppercase">
          Inizia a vendere
        </h2>
        <p className=" text-center text-gray-600 mb-8 font-inter">
          Un set di prodotti scelti per darti la spinta giusta da subito.
        </p>
        <div className="relative">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
            {CARD_DEFAULTS.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
          <div className="absolute w-full bottom-0 left-0">
            <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_100%)]  w-full h-20"></div>
            <div className="bg-white">
              <Button text="Salta" variant="primary" />
              <Button text="Indietro" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
