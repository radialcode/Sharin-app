import Image from "next/image";
import React from "react";

export interface CardData {
  title: string;
  imgSrc: string;
  price: string;
  discount: string;
}

export interface CardProps {
  card: CardData;
  className?: string;
  subCardClassName?: string;
  discountClassName?: string;
  titleClassName?: string;
  imgClassName?: string;
  priceClassName?: string;
}

const Card: React.FC<CardProps> = ({
  card,
  className = "rounded-lg flex flex-col max-sm:justify-center max-lg:items-center group",
  subCardClassName = "rounded-2xl border border-solid border-[#D9D9D9] max-w-[189px] size-[189px] max-sm:size-[unset] relative flex justify-center items-center bg-[#F1F1F1] group-hover:shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-shadow duration-300",
  discountClassName = `absolute top-2 left-2 bg-white text-black flex items-center gap-1.5 text-sm font-semibold px-2 py-1 rounded-full  ${Number(
    card.discount
      .replace("Guadagna €", "")
      .replace(/\./g, "")
      .replace(",", "")
      .trim()
  ) >= 1000
    ? "!bg-[#FFE943]"
    : ""
  }`,
  titleClassName = "text-lg font-black text-black mt-2 !mb-0 max-lg:text-center leading-[100%]",
  imgClassName = "w-full mx-auto object-center h-auto object-contain rounded-2xl",
  priceClassName = "text-sm font-medium text-[#767676] mt-1 ",
}) => {
  return (
    <>
      <div className={className}>
        <div className={subCardClassName}>
          <span className={discountClassName}>
            <span>
              {Number(
                card.discount
                  .replace("Guadagna €", "")
                  .replace(/\./g, "")
                  .replace(",", "")
                  .trim()
              ) >= 1000 && (
                  <>
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.87062 0.172616C6.77815 0.095954 6.66862 0.0426237 6.55125 0.0171118C6.43387 -0.00840005 6.31209 -0.00534703 6.19614 0.0260139C6.08019 0.0573749 5.97346 0.116126 5.88495 0.197325C5.79644 0.278524 5.72872 0.379794 5.6875 0.492616L4.44187 3.90574L3.21125 2.71137C3.1352 2.63752 3.04436 2.58063 2.94472 2.54445C2.84508 2.50828 2.73891 2.49363 2.63319 2.50149C2.52748 2.50934 2.42463 2.53952 2.33143 2.59002C2.23823 2.64053 2.1568 2.71022 2.0925 2.79449C0.704375 4.61324 0 6.44887 0 8.24949C0 9.77449 0.605802 11.237 1.68414 12.3154C2.76247 13.3937 4.22501 13.9995 5.75 13.9995C7.27499 13.9995 8.73753 13.3937 9.81586 12.3154C10.8942 11.237 11.5 9.77449 11.5 8.24949C11.5 4.42762 8.2625 1.32762 6.87062 0.172616ZM5.75 12.4995C4.62319 12.4983 3.54285 12.0502 2.74608 11.2534C1.9493 10.4566 1.50116 9.37631 1.5 8.24949C1.5 7.00324 1.9375 5.71074 2.79437 4.39699L4.2275 5.78762C4.31729 5.87474 4.42744 5.93802 4.54793 5.97169C4.66842 6.00536 4.79542 6.00835 4.91737 5.9804C5.03931 5.95244 5.15233 5.89443 5.24612 5.81163C5.33991 5.72884 5.4115 5.6239 5.45437 5.50637L6.7175 2.04387C8.08687 3.35012 10 5.64262 10 8.24949C9.99884 9.37631 9.5507 10.4566 8.75392 11.2534C7.95715 12.0502 6.87681 12.4983 5.75 12.4995Z"
                        fill="black"
                      />
                    </svg>
                  </>
                )}
            </span>{" "}
            {card.discount}
          </span>
          <Image width={189} height={189} src={card.imgSrc} alt={card.title} className={imgClassName} />
        </div>
        <h3 className={titleClassName}>{card.title}</h3>
        <p className={priceClassName}>{card.price}</p>
      </div>
    </>
  );
};

export default Card;
