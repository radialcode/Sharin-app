import React from "react";

export const CARD_DEFAULTS = {
  title: "This is the Card Title from Card.tsx",
  description: "This is the Card Description coming from Card.tsx",
};

export interface CardProps {
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const Card: React.FC<CardProps> = ({
  title = CARD_DEFAULTS.title,
  description = CARD_DEFAULTS.description,
  className = "max-w-sm bg-gray-50 p-4 rounded-lg shadow-md",
  titleClassName = "text-2xl font-bold text-blue-600",
  descriptionClassName = "text-gray-700 mt-2",
}) => {
  return (
    <div className={className}>
      <h2 className={titleClassName}>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
};

export default Card;
