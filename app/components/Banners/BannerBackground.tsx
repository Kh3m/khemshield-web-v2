import { PropsWithChildren } from "react";

interface Props {
  minHeight: string;
}
const BannerBackground = ({
  minHeight,
  children,
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <div>
      <div
        className={`${minHeight} bg-[url('/assets/images/nav_background.png')]  
        absolute top-0 right-0 left-0 -z-10`}
      ></div>
      {children}
      <div className="my-16 lg:my-32"></div>
    </div>
  );
};

export default BannerBackground;
