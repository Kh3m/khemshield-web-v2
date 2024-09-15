import React from "react";
import DropdownMenu from "../../components/Menus/DropdownMenu";

const items = [
  "All Courses",
  "Development",
  "Design",
  "Security",
  "Data & Analysis",
  "Programming Languages",
  "Technology & Infrastructure",
];
const TrainingDropdownItems = () => {
  return <DropdownMenu items={items} />;
};

export default TrainingDropdownItems;
