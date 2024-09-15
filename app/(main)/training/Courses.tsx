import React from "react";

import mobile_app from "@/public/assets/images/training/mobile_app.png";
import Course from "./Course";

const courses = [
  {
    image: mobile_app,
    name: "Mobile App Development (iOS/Android)",
    price: 200000,
    rating: 4.5,
    review_count: 211_434,
  },
  {
    image: mobile_app,
    name: "Frontend Web Development (Including ReactJs)",
    price: 200000,
    rating: 4.5,
    review_count: 342,
  },
  {
    image: mobile_app,
    name: "Fullstack Web Development (MERN stack, NextJs)",
    price: 200000,
    rating: 3.5,
    review_count: 123,
  },
  {
    image: mobile_app,
    name: "Cloud Computing",
    price: 200000,
    rating: 4.0,
    review_count: 234,
  },
];
const Courses = () => {
  return (
    <ul
      className=" grid gap-x-5 gap-y-9
    lg:grid-cols-3"
    >
      {courses.map(({ image, name, price, rating, review_count }) => (
        <Course
          key={name}
          image={image}
          price={price}
          name={name}
          rating={rating}
          review_count={review_count}
        />
      ))}
    </ul>
  );
};

export default Courses;
