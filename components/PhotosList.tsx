import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { photoArr } from "../photoData.js";

export default function PhotosList() {
  const photos = photoArr;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    let index = 0;
    let unsunscribe = setInterval(() => {
      if (index === photos.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
      setActiveIndex(index);
    }, 400);
    return () => {
      clearInterval(unsunscribe);
    };
  }, [photos.length]);

  return (
    <a href="https://www.redsquareagency.com/work">
      <ul className="photo-list">
        {photos.map((photo, i) => {
          return <Photo src={photo} key={i} id={i} activeIndex={activeIndex} />;
        })}
      </ul>
    </a>
  );
}

type PhotoProps = {
  src: StaticImageData;
  activeIndex: number;
  id: number;
};

function Photo({ src, activeIndex, id }: PhotoProps) {
  return (
    <li className={`photo-list-item ${id === activeIndex ? "active" : ""}`}>
      <Image src={src} alt="" />
    </li>
  );
}
