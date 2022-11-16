import Head from "next/head";

const TitleDesc = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.desc} />
      <link rel="icon" href="/assets/logo/favicon.svg" />
    </Head>
  );
};

export default TitleDesc;
