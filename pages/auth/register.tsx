import { FunctionComponent } from "react";
import Header from "../../src/shared/components/Header";
import Meta from "../../src/shared/components/Meta";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  return (
    <Meta title="Kuumba | Register">
      <div className="flex flex-col w-full min-h-screen gap-16 horizontal-padding sm:gap-24 md:gap-30 lg:gap-36">
        <Header />
        <h2 className="flex items-center justify-center flex-grow header2">
          Register View is working
        </h2>
      </div>
    </Meta>
  );
};

export default Register;
