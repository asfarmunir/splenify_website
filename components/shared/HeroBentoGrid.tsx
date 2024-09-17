import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-5xl 2xl:max-w-7xl mx-auto  w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          img={item.src}
          className={
            i === 0
              ? "md:row-span-3"
              : i === 1
              ? "md:row-span-1 col-span-1"
              : i === 2
              ? "md:col-span-1 row-span-2"
              : i === 3
              ? "md:col-span-1"
              : i === 4
              ? "md:col-span-1"
              : i === 5
              ? "md:col-span-1"
              : ""
          }
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    src: "/images/hero_img1.svg",
  },
  {
    src: "/images/hero_img2.svg",
  },
  {
    src: "/images/hero_img5.svg",
  },
  {
    src: "/images/hero_img3.svg",
  },
  {
    src: "/images/hero_img4.svg",
  },
  {
    src: "/images/hero_img6.svg",
  },
];
