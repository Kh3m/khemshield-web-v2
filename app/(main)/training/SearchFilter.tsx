import SearchInput from "@/app/components/Inputs/SearchInput";
import React from "react";
import TrainingDropdownItems from "./TrainingDropdownItems";

const SearchFilter = () => {
  return (
    <div
      className="flex flex-col gap-4
    lg:flex-row lg:items-center lg:justify-center"
    >
      <div className="lg:w-1/3">
        <SearchInput />
      </div>
      <TrainingDropdownItems />
    </div>
  );
};

export default SearchFilter;
