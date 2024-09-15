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
    <article className="flex gap-7 min-w-full scroll-snap-align-start ">
      <Image
        src={user.image}
        alt={user.name}
        className="w-[150px] h-[150px] xs:w-[164px] xs:h-[164px] rounded-full object-cover"
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
