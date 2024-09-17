import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type CommonProps = {
  variant: ButtonVariantType;
  full?: boolean;
  styles?: string;
};

// Attributes specific to button
interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
  elementType?: "button";
}

// Attributes specific to link
interface LinkAttributes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  elementType?: "link";
  href: string;
}

type Props = CommonProps & (ButtonAttributes | LinkAttributes);

type ButtonVariantType = "primary" | "border";

const Button = ({
  children,
  variant,
  elementType,
  full,
  styles,
  ...rest
}: Readonly<Props>) => {
  const baseStyle = `${styles} ${
    full && "w-full"
  } py-2 px-3 rounded-md font-semibold
  disabled:bg-gray-400 disabled:text-secondary-normal`;

  const btnStyle: { [key in ButtonVariantType]: string } = {
    primary: "bg-primary-normal text-white",
    border: "border-primary-normal border text-secondary-normal",
  };

  switch (elementType) {
    case "link": {
      const resprops = rest as LinkAttributes;
      return (
        <Link {...resprops} className={`${btnStyle[variant]} ${baseStyle}`}>
          {children}
        </Link>
      );
    }

    default: {
      const resprops = rest as ButtonAttributes;
      return (
        <button {...resprops} className={`${btnStyle[variant]} ${baseStyle}`}>
          {children}
        </button>
      );
    }
  }
};

export default Button;
