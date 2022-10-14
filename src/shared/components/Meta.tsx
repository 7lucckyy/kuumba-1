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
        <meta
          name="description"
          content="Empowering authors and readers"
        />
      </Head>

      <>{children}</>
    </>
  );
};

export default Meta;
