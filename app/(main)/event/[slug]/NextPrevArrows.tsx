import { ArrowLeft, ArrowRight } from "iconsax-react";

interface Props {
  isLast: boolean;
  isFirst: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  styles?: string;
}

const NextPrevArrows = ({
  isLast,
  isFirst,
  handlePrev,
  handleNext,
  styles,
}: Readonly<Props>) => {
  return (
    <div className={`${styles} flex gap-2 justify-end items-center`}>
      <ArrowLeft
        size={28}
        className={`${isFirst && "text-gray-200"} 
          my-4 cursor-pointer`}
        onClick={handlePrev}
      />
      <ArrowRight
        size={28}
        className={`${isLast && "text-gray-200"} my-4cursor-pointer`}
        onClick={handleNext}
      />
    </div>
  );
};

export default NextPrevArrows;
