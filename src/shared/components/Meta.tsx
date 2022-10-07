import Head from "next/head";
import { FunctionComponent, PropsWithChildren } from "react";

interface MetaProps {
  title: string;
}

const Meta: FunctionComponent<PropsWithChildren<MetaProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <>{children}</>
    </>
  );
};

export default Meta;
