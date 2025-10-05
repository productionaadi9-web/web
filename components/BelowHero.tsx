import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function BelowHero() {
  const items = [
    {

      image:
        "https://res.cloudinary.com/duax5xong/image/upload/v1758467414/photo_3_n8p7ks.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {

      image:
        "https://res.cloudinary.com/duax5xong/image/upload/v1758467413/photo_1_tclbs6.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {

      image:
        "https://res.cloudinary.com/duax5xong/image/upload/v1758467409/photo_2_pdkfzz.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {

      image:
        "https://res.cloudinary.com/duax5xong/image/upload/v1758643936/image_4_gzhaq4.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {

      image:
        "https://res.cloudinary.com/duax5xong/image/upload/v1758643943/image_5_llypsa.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },


  ];

  return (
    <div className=" bg-black">
      <DraggableCardContainer className="relative flex w-full h-svh items-center justify-center overflow-clip">
        {/*<p className="absolute top-1/2 flex flex-col mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl">
        still not convinced?
        <Link href="/Events">
      <Button className="bg-amber-200 text-black hover:bg-amber-300">
        Check our events
      </Button>
        </Link>
      </p>*/}
        {items.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <img
              src={item.image}
              alt={'image'}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />

          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  )
}