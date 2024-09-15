import Image, { StaticImageData } from "next/image";

export type ImageType = {
  src: StaticImageData;
  alt: string;
};
interface Props {
  images: ImageType[];
}
const StackedImages = ({ images }: Readonly<Props>) => {
  return (
    <ul className="flex">
      {images.map(({ src, alt }, i) => (
        <li
          key={i}
          className=" h-[50px] w-[50px] rounded-full  
            border-4 border-white -ml-6 first-of-type:-ml-0"
        >
          <Image
            src={src}
            alt={alt}
            width={80}
            height={80}
            className=" w-full h-full object-cover rounded-full"
          />
        </li>
      ))}
    </ul>
  );
};

export default StackedImages;
