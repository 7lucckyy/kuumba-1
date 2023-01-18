import { Fragment, FunctionComponent } from "react";
import Image from "next/image";
import ServicesArrow from "../../../shared/components/ServicesArrow";

interface HomeServicesProps {}

const services = [
  {
    title: "Read2Earn",
    content: "Earn PEN tokens by reading and supporting other readers",
    imgSrc: "/img/read2earn.svg",
    altText: "Read 2 earn icon"
  },
  {
    title: "Microtransaction",
    content: "Enabling you to explore more titles and only paying for what you read / listened to",
    imgSrc: "/img/microtransaction.svg",
    altText: "Microtransaction icon"
  },
  {
    title: "Connect",
    content: "Connect with other readers, authors and publishers",
    imgSrc: "/img/connect.svg",
    altText: "Connect icon"
  },
  {
    title: "NFT eBooks",
    content: "Generate lifetime royalties, own eBooks and audiobooks",
    imgSrc: "/img/nft_ebooks.svg",
    altText: "Nft eBooks icon"
  },
]

const HomeServices: FunctionComponent<HomeServicesProps> = () => {
  return (
    <section className="bg-[#0C1B3A] text-white flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-6 p-6 md:p-10 lg:p-16 rounded-2xl">
      {services.map((service, i) => (
        <Fragment key={service.title}>
          <div className="flex items-start gap-3">
            <div className="max-w-[12px] sm:min-w-[16px] md:min-w-[20px]">
              <Image
                src={service.imgSrc}
                alt={service.altText}
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="font-medium !leading-[18px] header6">{service.title}</h6>
              <p className="small-base">{service.content}</p>
            </div>
          </div>
          {i!==3 && <ServicesArrow />}
        </Fragment>
      ))}
    </section>
  );
};

export default HomeServices;
