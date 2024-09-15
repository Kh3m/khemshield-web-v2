import { Star, Star1 } from "iconsax-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import BaseSpacing from "../Spacing/BaseSpacing";
import Heading from "../Generics/Heading";
import Text from "../Generics/Text";

type ReviewType = {
  rating: number;
  text: string;
};

type ReviewUserType = {
  image: StaticImageData;
  name: string;
  role: string;
  company: string;
};

export type TestimonialType = {
  review: ReviewType;
  user: ReviewUserType;
};

interface Props {
  testimonial: TestimonialType;
}

const Testimonial = ({ testimonial: { user, review } }: Props) => {
  return (
    <article
      className="flex gap-7 
    lg:max-w-[970px]
    xl:max-w-[1024px]
  "
    >
      <Image
        src={user.image}
        alt={user.name}
        className=" w-[164px] h-[164px] rounded-full"
      />

      <div>
        <div className="flex items-center gap-1">
          <Star1 variant="Bold" className=" text-orange-400" />
          <Star1 variant="Bold" className=" text-orange-400" />
          <Star1 variant="Bold" className=" text-orange-400" />
          <Star1 variant="Bold" className=" text-orange-400" />
          <Star1 variant="Bold" className=" text-orange-400" />
        </div>
        <BaseSpacing />
        <p>{review.text}</p>
        <BaseSpacing />
        <div>
          <Text variant="semibold">{user.name}</Text>
          <Text>{user.role + " " + user.company}</Text>
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
