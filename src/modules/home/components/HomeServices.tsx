import { FunctionComponent } from "react";

interface HomeServicesProps {}

const HomeServices: FunctionComponent<HomeServicesProps> = () => {
  return (
    <div className="bg-[#0C1B3A] text-white flex gap-9 p-16 rounded-2xl">
      <div className="flex gap-3">
        <div className="icon"></div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium header6">Read2Earn</h3>
          <p className="small-base">Earn PEN tokens by reading and supporting other readers</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="icon"></div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium header6">Microtransaction</h3>
          <p className="small-base">
            Enabling you to explore more titles and only paying for what you
            read / listened to
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="icon"></div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium header6">Connect</h3>
          <p className="small-base">Connect with other readers, authors and publishers</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="icon"></div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium header6">NFT eBooks</h3>
          <p className="small-base">Generate lifetime royalties, own eBooks and audiobooks</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
