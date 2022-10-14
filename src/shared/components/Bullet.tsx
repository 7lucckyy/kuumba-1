import { FunctionComponent } from "react";
import Image from "next/image";

interface BulletProps {}

const Bullet: FunctionComponent<BulletProps> = () => {
  return (
    <div className="max-w-[12px] sm:min-w-[20px] md:min-w-[24px]">
      <Image
        src="/img/bullet.svg"
        alt="Bullet icon"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Bullet;
