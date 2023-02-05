import { FunctionComponent } from "react";
import Header from "../../src/shared/components/Header";
import Meta from "../../src/shared/components/Meta";

interface ResetPasswordProps {}

const ResetPassword: FunctionComponent<ResetPasswordProps> = () => {
  return (
    <Meta title="Kuumba | Reset Password">
      <div className="flex flex-col w-full min-h-screen gap-16 horizontal-padding sm:gap-24 md:gap-30 lg:gap-36">
        <Header />
        <h2 className="flex items-center justify-center flex-grow header2">
          Reset Password View is working
        </h2>
      </div>
    </Meta>
  );
};

export default ResetPassword;
