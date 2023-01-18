import Image from "next/image";
import { FunctionComponent } from "react";

interface HomeHeroProps {}

const HomeHero: FunctionComponent<HomeHeroProps> = () => {
  return (
    <section className="flex items-center gap-24">
      <div className="w-full lg:w-3/5">
        <div className="flex flex-col gap-6">
          <h2 className="font-extrabold header2">
            Pay per page. <br /> Let&apos;s be honest, you don&apos;t always{" "}
            <span className="text-primary">finish the book...</span>
          </h2>
          <p className="header6">
            The first SocialFi eBook platform dedicated to promoting lifelong
            reading and learning Globally
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
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
        <div className="flex items-center gap-4 mt-12 sm:mt-16 md:mt-20 lg:mt-28">
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
      <div className="hidden w-2/5 lg:block">
        <span className="relative top-16">
          <Image
            src="/img/mockups_light.svg"
            alt="Iphone mockups light source"
            width={75}
            height={45}
            priority
          />
        </span>
        <Image
          src="/img/home_hero_mockups.svg"
          alt="Iphone mockups from home hero section"
          width={550}
          height={550}
          priority
        />
      </div>
    </section>
  );
};

export default HomeHero;
