import Image from "next/image";
import { FunctionComponent } from "react";

interface HomeHeroProps {}

const HomeHero: FunctionComponent<HomeHeroProps> = () => {
  return (
    <div className="flex items-center gap-24 py-32">
      <div className="w-full">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-5xl font-extrabold">Pay per page.</h2>
            <h2 className="text-5xl font-extrabold">
              Let&apos;s be honest, you don&apos;t always{" "}
              <span className="text-primary">finish the book...</span>
            </h2>
          </div>
          <p className="text-xl">
            The first SocialFi eBook platform dedicated to promoting lifelong
            reading and learning Globally
          </p>
          <div className="flex gap-4">
            <button className="btn btn-link !px-0">
              <Image
                src="/img/appstore.svg"
                alt="Appstore download link"
                width={140}
                height={40}
              />
            </button>
            <button className="btn btn-link !px-0">
              <Image
                src="/img/googleplay.svg"
                alt="Google Playstore download link"
                width={140}
                height={40}
              />
            </button>
            <button className="btn btn-link !px-0">
              <Image
                src="/img/demo.svg"
                alt="App demo download link"
                width={140}
                height={40}
              />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-20">
          <Image
            src="/img/george_martin.svg"
            alt="Image of George Martin"
            width={75}
            height={75}
          />
          <div className="flex flex-col gap-1.5 leading-3">
            <p className="text-sm font-medium leading-4">
              &quot;A reader lives a thousand lives before he dies, said Jojen.
              A man who never reads lives only one&quot;
            </p>
            <span className="text-xs text-gray-500">- George R. R. Martin</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mockup-phone">
          <div className="camera !w-36"></div>
          <div className="display">
            <div className="!w-64 !h-[550px] artboard artboard-demo phone-1">
              <Image
                src="/img/home_hero_main_mockup.svg"
                alt="Main iphone mockup from home hero section"
                width={256}
                height={550}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
