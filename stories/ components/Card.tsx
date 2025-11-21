import Link from "next/link";
import React from "react";

export const CARD_DEFAULTS = [
  {
    imgSrc: "/images/png/clock.png",
    title: "Newgate Wideboy Alarm Clock",
    discount: "Guadagna € 8,00",
    price: "€ 56,95",
  },
  {
    imgSrc: "/images/png/clock.png",
    title: "Newgate Wideboy Alarm Clock",
    discount: "Guadagna € 8,00",
    price: "€ 56,95",
  },
  {
    imgSrc: "/images/png/clock.png",
    title: "Newgate Wideboy Alarm Clock",
    discount: "Guadagna € 8,00",
    price: "€ 56,95",
  },
  {
    imgSrc: "/images/png/clock.png",
    title: "Newgate Wideboy Alarm Clock",
    discount: "Guadagna € 8,00",
    price: "€ 56,95",
  },
];

export interface CardProps {
  logo?: string;
  profileImage?: string;
  heading?: string;
  description?: string;
  indietroButton?: string;
  saltaButton?: string;
  terminiECondizioniText?: string;
  privacyPolicyText?: string;
  normeSuiCookieText?: string;
  footerText?: string;

  containerClassName?: string;
  rowClassName?: string;
  className?: string;
  subCardClassName?: string;
  discountClassName?: string;
  titleClassName?: string;
  imgClassName?: string;
  priceClassName?: string;
  headerClass?: string;
  logoClassName?: string;
  profileImageClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  saltaButtonClassName?: string;
  indietroButtonClassName?: string;
  relative?: string;
  layerClassName?: string;
  footerClassName?: string;
  footerTextClassName?: string;
}

const Card: React.FC<CardProps> = ({
  logo = "/images/svg/logo.svg",
  profileImage = "/images/png/profile-image.jpg",
  heading = "Inizia a vendere",
  description = "Un set di prodotti scelti per darti la spinta giusta da subito.",
  saltaButton = "Salta",
  indietroButton = "Indietro",
  terminiECondizioniText = "Termini e condizioni",
  privacyPolicyText = "Privacy Policy",
  normeSuiCookieText = "Norme sui Cookie",
  footerText = `© ${new Date().getFullYear()} Sharin Srl`,

  containerClassName = "max-w-[640px] px-5 mx-auto h-[calc(100vh-80px)]",
  rowClassName = "grid grid-cols-3 max-lg:grid-cols-1 max-sm:grid-cols-1 gap-4",
  className = "rounded-lg flex flex-col justify-center items-center",
  subCardClassName = "rounded-2xl border border-solid border-[#D9D9D9] max-w-[189px] size-[189px] max-sm:size-[unset] relative bg-[#F1F1F1]",
  discountClassName = "absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded font-inter",
  titleClassName = "text-lg font-black text-black font-inter mt-2",
  imgClassName = "w-full h-auto rounded-2xl",
  priceClassName = "text-base font-medium text-gray-700 mt-1 font-inter",
  headerClass = "p-5 flex justify-between items-center bg-white",
  profileImageClassName = "size-10 rounded-full",
  headingClassName = "text-4xl max-sm:text-3xl max-sm:pt-4 font-bold text-center mb-4 font-inter uppercase",
  descriptionClassName = "font-inter text-center text-gray-600 mb-8",
  saltaButtonClassName = "py-3 w-full bg-[#F1F1F1] text-black font-black rounded-xl font-inter text-center cursor-pointer ",
  indietroButtonClassName = "py-3 w-full text-black font-black rounded-xl font-inter text-center cursor-pointer mt-2 ",
  relative = "relative",
  layerClassName = "bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_100%)] absolute bottom-0 left-0 w-full h-20",
  footerClassName = "flex items-center justify-center gap-4 py-4 flex-wrap",
  footerTextClassName = "text-[#767676] text-sm font-inter",
}) => {
  return (
    <>
      <div className={headerClass}>
        <Link href="/">
          <img src={logo} alt={heading} />
        </Link>
        <img
          className={profileImageClassName}
          src={profileImage}
          width={40}
          height={40}
          alt={heading}
        />
      </div>

      <div className={containerClassName}>
        <h2 className={headingClassName}>{heading}</h2>
        <p className={descriptionClassName}>{description}</p>
        <div className={relative}>
          <div className={layerClassName}></div>
          <div className={rowClassName}>
            {CARD_DEFAULTS.map((card, index) => (
              <div className={className} key={index}>
                <div className={subCardClassName}>
                  <span className={discountClassName}>{card.discount}</span>
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className={imgClassName}
                  />
                </div>
                <h3 className={titleClassName}>{card.title}</h3>
                <p className={priceClassName}>{card.price}</p>
              </div>
            ))}
          </div>
        </div>
        <button className={saltaButtonClassName}>{saltaButton}</button>
        <button className={indietroButtonClassName}>{indietroButton}</button>
        <div className={footerClassName}>
        <p className={footerTextClassName}>{terminiECondizioniText}</p>
        <Link className={footerTextClassName} href="/">
          {privacyPolicyText}
        </Link>
        <p className={footerTextClassName}>{normeSuiCookieText}</p>
        <p className={footerTextClassName}>{footerText}</p>
      </div>
      </div>

      
    </>
  );
};

export default Card;
