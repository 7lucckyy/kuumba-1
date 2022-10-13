import Image from "next/image";
import { FunctionComponent } from "react";

interface HomeHeroProps {}

const HomeHero: FunctionComponent<HomeHeroProps> = () => {
  return (
    <div className="flex items-center gap-24 py-32">
      <div className="w-full">
        <div className="flex flex-col gap-6">
          <div className="font-extrabold header2 leading-[100px]">
            <h2 className="leading-[70px]">
              Pay per page. <br /> Let&apos;s be honest, you don&apos;t always{" "}
              <span className="text-primary">finish the book...</span>
            </h2>
          </div>
          <p className="header6">
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
        <div className="flex items-center gap-4 mt-28">
          <Image
            src="/img/george_martin.svg"
            alt="Image of George Martin"
            width={75}
            height={75}
          />
          <div className="flex flex-col gap-1.5 leading-3">
            <p className="leading-4 small-medium">
              &quot;A reader lives a thousand lives before he dies, said Jojen.
              A man who never reads lives only one&quot;
            </p>
            <span className="text-gray-500 tiny">- George R. R. Martin</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <span className="relative top-16">
          <Image
            src="/img/mockups_light.svg"
            alt="Iphone mockups light source"
            width={75}
            height={45}
          />
        </span>
        <Image
          src="/img/home_hero_mockups.svg"
          alt="Iphone mockups from home hero section"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};

export default HomeHero;
