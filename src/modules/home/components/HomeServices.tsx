import { FunctionComponent } from "react";

interface HomeServicesProps {}

const HomeServices: FunctionComponent<HomeServicesProps> = () => {
  return (
    <div className="bg-[#0C1B3A] text-white flex gap-9 p-16 rounded-2xl">
      <div className="flex gap-3">
        <div className="icon"></div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Read2Earn</h3>
          <p className="text-sm">Earn PEN tokens by reading and supporting other readers</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="icon"></div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Microtransaction</h3>
          <p className="text-sm">
            Enabling you to explore more titles and only paying for what you
            read / listened to
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="icon"></div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Connect</h3>
          <p className="text-sm">Connect with other readers, authors and publishers</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="icon"></div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">NFT eBooks</h3>
          <p className="text-sm">Generate lifetime royalties, own eBooks and audiobooks</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
