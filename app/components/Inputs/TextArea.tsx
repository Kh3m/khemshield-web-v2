import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({ ...rest }: Readonly<Props>) => {
  return (
    <textarea
      {...rest}
      className="border h-[150px] resize-none border-secondary-normal w-full rounded-lg px-4 py-4 
      text-secondary-normal placeholder:text-secondary-normal has-scrollbar"
    ></textarea>
  );
};

export default TextArea;
