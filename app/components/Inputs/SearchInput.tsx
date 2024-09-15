import { SearchNormal } from "iconsax-react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...rest }: Readonly<Props>) => {
  return (
    <div className="relative">
      <input
        {...rest}
        autoComplete="off"
        type="search"
        name="search"
        className="search-field w-full text-sm text-secondary-normal py-3 px-4 border border-secondary-normal
             border-cultured rounded-md pl-[60px] focus:outline-none placeholder:text-secondary-normal"
      />
      <button
        type="button"
        className=" absolute top-1/2 -translate-y-1/2 left-1
            text-secondary-normal text-[24px] py-[8px] px-[15px] rounded-md"
      >
        <SearchNormal className="hover:text-primary-normal transition duration-200" />
      </button>
    </div>
  );
};

export default SearchInput;
