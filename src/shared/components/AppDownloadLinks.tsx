import { FunctionComponent } from "react";
import Image from "next/image";

interface AppDownloadLinksProps {}

const AppDownloadLinks: FunctionComponent<AppDownloadLinksProps> = () => {
  return (
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
  );
};

export default AppDownloadLinks;
