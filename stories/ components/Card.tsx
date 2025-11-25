import Icon from "@/components/common/Icon";
import { TEXT_TYPE } from "@/utils/constant";
import Image from "next/image";
import React from "react";

export interface CardData {
  title: string;
  imgSrc: string;
  hoverImage: string;
  price: string;
  discount: string;
  description?: string;
}

export interface CardProps {
  card: CardData;
  className?: string;
  subCardClassName?: string;
  discountClassName?: string;
  titleClassName?: string;
  imgClassName?: string;
  priceClassName?: string;
  color?: 'light' | 'dark';
  added?: boolean;
  favorite?: boolean;
  description?: boolean;
  overlay?: boolean;
  screen?: 'desktop' | 'mobile'
  radius?: 'default' | 'full'
  status?: 'default' | 'hover'
  badge?: boolean;
  badgeSize?: 'LG 48' | 'MD 40' | 'SM 32'
  badgeLeftIcon?: boolean
  badgeRightIcon?: boolean
  favoriteSize?: 'MD 40' | 'SM 32'
  favoriteStatus?: 'hover' | 'focus' | 'loading' | 'disable' | 'default'
  badgeType?: 'default' | 'primary' | 'success' | 'caution' | 'critical' | 'red' | 'yellow' | 'green' | 'sky' | 'purple' | 'inverce' | 'on color'
  buttonSize?: 'LG 48' | 'MD 40' | 'SM 32'
  buttonStatus?: 'hover' | 'focus' | 'loading' | 'disable' | 'default' | 'active'
  buttonLeftIcon?: boolean
  buttonRightIcon?: boolean
  buttonText?: string
   buttonAppearance?: "Subdued" | "Fill" | "Ghost" | "Critical" | "Accent" |"on color";

}
const Card: React.FC<CardProps> = ({
  card,
  radius = 'defult',
  buttonText = 'Aggiungi',
  buttonSize = 'LG 48',
  buttonAppearance,
  buttonStatus = 'default',
  buttonLeftIcon = false,
  buttonRightIcon = false,
  status = 'defult',
  favoriteSize = 'MD 40',
  favoriteStatus = 'default',
  favorite = false,
  description = false,
  overlay = false,
  screen = 'desktop',
  badgeType = 'default',
  badge = false,
  badgeSize = 'SM 32',
  badgeLeftIcon = false,
  badgeRightIcon = false,
  added = false,
  color = TEXT_TYPE.LIGHT,
  className = "rounded-lg flex flex-col max-sm:justify-center max-lg:items-center group",
  subCardClassName = "rounded-2xl  border border-solid border-[#D9D9D9] max-w-[189px] size-[189px] max-sm:size-[unset] relative flex justify-center items-center bg-[#F1F1F1] group-hover:shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-shadow duration-300",
  discountClassName = `absolute top-2 px-2 py-1 left-2  flex items-center gap-1 font-semibold  rounded-full  ${Number(
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
  imgClassName = "w-full mx-auto object-center h-auto object-contain rounded-2xl group-hover:opacity-0 group-hover:pointer-events-none opacity-100 pointer-event-auto duration-300",
  priceClassName = "text-sm font-medium text-[#767676] mt-1",

}) => {
  const sizeBadge =
    badgeSize === "MD 40"
      ? " text-xs"
      : badgeSize === "LG 48"
        ? "text-sm"
        : "text-[10px]";
  const sizeButton =
    buttonSize === "MD 40"
      ? "text-xs"
      : buttonSize === "LG 48"
        ? "text-sm"
        : "text-[10px]";
  const sizeFavorite =
    favoriteSize === "MD 40"
      ? "size-10 min-w-10" : "size-8 min-w-8";
       const appearanceButtonClasses =
    buttonAppearance === "Fill"
      ? "bg-black! text-white!"
      : buttonAppearance === "Subdued"
        ? "bg-white! text-black!"
        : buttonAppearance === "Ghost" ?
          "bg-white! text-black!" :
          buttonAppearance === "Critical" ?
            "text-white! bg-[#FC351B]!"
            : buttonAppearance === "Accent" ?
              "text-black! bg-[#FFE943]!"
              : "bg-white! text-black!";
  const badgeBgClasses = {
    default: color === TEXT_TYPE.DARK ? "bg-[#191919] text-white" : "bg-gray-200 text-black",
    primary: "bg-yellow-400 text-black",
    success: "bg-green-600 text-black",
    caution: "bg-yellow-400 text-black",
    critical: "bg-red-500 text-white",
    red: "bg-red-500 text-white",
    yellow: "bg-yellow-400 text-black",
    green: "bg-green-500 text-black",
    sky: "bg-sky-400 text-black",
    purple: "bg-purple-500 text-white",
    inverce: "bg-black text-white",
    "on color": "bg-white text-blackß",
  };
  const favoriteStatusClass = {
    hover: "bg-[#191919] text-white",
    focus: color === TEXT_TYPE.DARK ? "outline outline-white outline-offset-[3px]" : "outline outline-black outline-offset-[3px]",
    loading: "",
    disable: "opacity-50",
    default: "bg-red-500 text-white",
  };
  const buttonStatusClass = {
    hover: "bg-[#d4d4d4]! text-black",
    focus: color === TEXT_TYPE.DARK ? "outline outline-white" : "outline outline-black",
    loading: "",
    disable: "group-hover:!opacity-50",
    default: "bg-white text-black",
    active: "bg-[#d4d4d4]! text-black",
  };
  const bgBadge = badgeBgClasses[badgeType] || badgeBgClasses.default;
  const statusFav = favoriteStatusClass[favoriteStatus] || favoriteStatusClass.default;
  const statusButton = buttonStatusClass[buttonStatus] || buttonStatusClass.default;
  return (
    <>
      <div className={className}>
        <div className={`${subCardClassName} ${color === TEXT_TYPE.DARK ? 'bg-[#2b2b2b]!' : ''}  ${radius === 'full' ? 'rounded-full!' : ''}`}>
          {badge && <span className={`${discountClassName} ${color === TEXT_TYPE.DARK ? '' : ''} ${sizeBadge} ${bgBadge}`}>
            {badgeLeftIcon && <Icon name="circle" />}
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
            {badgeRightIcon && <Icon name="eye" />}
          </span>}
          <Image width={189} height={189} src={card.imgSrc} alt={card.title} className={imgClassName} />
          <Image width={400} height={400} src={card.hoverImage} alt={card.title} className='group-hover:opacity-100 group-hover:pointer-events-auto opacity-0 pointer-event-none duration-300 z-[9] absolute inset-0 object-center  object-cover rounded-2xl' />

          <div className="absolute bottom-2 left-0 left-0 z-10 flex gap-1 items-center right-0 mx-2">
            <button className={`cursor-pointer relative w-full translate-y-5 opacity-0 group-hover:opacity-100 duration-300 left-0 right-0 mx-2 group-hover:translate-y-0 py-2 font-bold  rounded-2xl  hover:bg-white/80 ${sizeButton} ${statusButton} ${appearanceButtonClasses}`}> {buttonStatus === 'loading' ? <Icon className="text-black!" name="loading" /> : <span className="flex items-center justify-center gap-1"> {buttonLeftIcon && <Icon name="search"/>}
                  {buttonText}
                  {buttonRightIcon && <Icon className="rotate-90" name="moveRight"/>}</span>}</button>
            {favorite && <div className={`bg-red-500  flex items-center justify-center rounded-lg ${sizeFavorite} ${statusFav}`}>
              {favoriteStatus === 'hover' && <div className="bg-black py-2 px-2 !leading-[100%] text-white rounded-md absolute -top-[25px] text-[10px] text-nowrap font-semibold -transalte-y-1/2 flex flex-col items-center justify-center">

                <p className="relative">Rimuovi dai preferiti
                  <span className="w-1 h-1 min-w-1 bg-black rotate-45 absolute -bottom-3 left-1/2 -translate-1/2"></span>
                </p>

              </div>}
              {favoriteStatus === 'loading' ? <Icon className="text-white" name="loading" /> : <Icon className="text-white" name="heart" />}
            </div>}
            {added && !favorite && <div className="bg-[#FFE943]  z-10 size-10 min-w-10 flex items-center justify-center rounded-2xl">
              <Icon name="tick" />
            </div>}
          </div>
        </div>
        <h3 className={`${titleClassName} ${color === TEXT_TYPE.DARK ? 'text-white!' : ''} ${screen === 'mobile' ? 'text-sm!' : ''}`}>{card.title}</h3>
        {description && <p className={`text-[#767676] text-sm mt-1 ${color === TEXT_TYPE.DARK ? 'text-white!' : ''}`}>{card.description}</p>}
        <p className={`${priceClassName} ${color === TEXT_TYPE.DARK ? 'text-white!' : ''}`}>{card.price}</p>
      </div>
    </>
  );
};

export default Card;
