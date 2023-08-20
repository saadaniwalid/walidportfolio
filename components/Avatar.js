import { ComputersCanvas } from "./canvas";
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none w-[737px] h-[678px] ">
      <Image src={'/walid-avatar1.png'} className="translate-z-0 w-full h-full " width={737} height={678}  />
    </div>
  );
};

export default Avatar;
