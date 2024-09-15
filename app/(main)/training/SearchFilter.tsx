import SearchInput from "@/app/components/Inputs/SearchInput";
import React from "react";
import TrainingDropdownItems from "./TrainingDropdownItems";

interface Props {
  onSelectFilter: (selectedFilter: string) => void;
  onHandleSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}
const SearchFilter = ({
  onSelectFilter,
  onHandleSearchTerm,
  searchTerm,
}: Readonly<Props>) => {
  return (
    <div
      className="flex flex-col gap-4
    lg:flex-row lg:items-center lg:justify-center"
    >
      <div className="lg:w-1/3">
        <SearchInput
          value={searchTerm}
          onChange={(e) => onHandleSearchTerm(e.target.value)}
        />
      </div>
      <TrainingDropdownItems onSelectItem={onSelectFilter} />
    </div>
  );
};

export default SearchFilter;
