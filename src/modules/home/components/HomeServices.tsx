import { FunctionComponent } from "react";
import Image from "next/image";
import ServicesArrow from "../../../shared/components/ServicesArrow";

interface HomeServicesProps {}

const HomeServices: FunctionComponent<HomeServicesProps> = () => {
  return (
    <section className="bg-[#0C1B3A] text-white flex flex-col lg:flex-row gap-3 md:gap-6 lg:gap-6 p-6 md:p-10 lg:p-16 rounded-2xl">
      <div className="flex items-start gap-3">
        <div className="max-w-[12px] sm:min-w-[16px] md:min-w-[20px]">
          <Image
            src="/img/read2earn.svg"
            alt="Read 2 earn icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-medium !leading-[18px] header6">Read2Earn</h6>
          <p className="small-base">
            Earn PEN tokens by reading and supporting other readers
          </p>
        </div>
      </div>
      <ServicesArrow />
      <div className="flex items-start gap-3">
        <div className="max-w-[12px] sm:min-w-[16px] md:min-w-[20px]">
          <Image
            src="/img/microtransaction.svg"
            alt="Microtransaction icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-medium !leading-[18px] header6">
            Microtransaction
          </h6>
          <p className="small-base">
            Enabling you to explore more titles and only paying for what you
            read / listened to
          </p>
        </div>
      </div>
      <ServicesArrow />
      <div className="flex items-start gap-3">
        <div className="max-w-[12px] sm:min-w-[16px] md:min-w-[20px]">
          <Image
            src="/img/connect.svg"
            alt="Connect icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-medium !leading-[18px] header6">Connect</h6>
          <p className="small-base">
            Connect with other readers, authors and publishers
          </p>
        </div>
      </div>
      <ServicesArrow />
      <div className="flex items-start gap-3">
        <div className="max-w-[12px] sm:min-w-[16px] md:min-w-[20px]">
          <Image
            src="/img/nft_ebooks.svg"
            alt="Nft eBooks icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-medium !leading-[18px] header6">NFT eBooks</h6>
          <p className="small-base">
            Generate lifetime royalties, own eBooks and audiobooks
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
