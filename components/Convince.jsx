import React from "react";
import Image from "next/image";

const Convince = ({title, text, imageSrc}) => {
    let source = `/${imageSrc}`;
  return (
    <div className="flex flex-col gap-6 items-center">
      <Image src={source} height={50} width={80}  alt="rotating_coin" className="h-20" unoptimized />
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm font-bold">{title}</p>
        <p className="text-sm font-medium">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Convince;
