import { PropsWithChildren } from "react";

type BodyVariantType = "bold" | "semibold" | "regular";
type BodyColorType = "primary" | "secondary" | "gray";

interface Props {
  styles?: string;
  variant?: BodyVariantType;
  color?: BodyColorType;
  inline?: boolean;
  type?: "body" | "caption";
}

const Text = ({
  children,
  styles,
  inline,
  variant = "regular",
  color = "secondary",
  type = "body",
}: Readonly<PropsWithChildren<Props>>) => {
  const variants: { [key in BodyVariantType]: string } = {
    bold: "font-bold",
    semibold: "font-semibold",
    regular: "font-normal",
  };

  const colors: { [key in BodyColorType]: string } = {
    primary: "text-primary-normal",
    secondary: "text-secondary-normal",
    gray: "text-[#8C94A3]",
  };

  if (inline)
    return (
      <span
        className={`${styles} ${variants[variant]} ${colors[color]}
    ${type === "caption" && "text-xs"}`}
      >
        {children}
      </span>
    );

  return (
    <p
      className={`${styles} ${variants[variant]} ${colors[color]}
    ${type === "caption" && "text-xs"}`}
    >
      {children}
    </p>
  );
};

export default Text;
