import Layout from "../components/Layout/Layout";
import Head from "next/head";

import "../public/styles/global.css";

function Application(props) {
  const { Component } = props;

  return (
    <Layout>
      <Head>
        <title>
          ISBRA 2022 - 18th International Symposium on Bioinformatics Research
          and Applications
        </title>
        <meta name="description" content="" />
        <meta
          property="og:title"
          content="ISBRA 2022 - 18th International Symposium on Bioinformatics Research
          and Applications"
        />
        <meta
          property="og:description"
          content="The International Symposium on Bioinformatics Research and Applications (ISBRA) provides a forum for the exchange of ideas and results among researchers, developers, and practitioners working on all aspects of bioinformatics and computational biology and their applications."
        />
        <meta
          property="og:url"
          content="https://mangul-lab-usc.github.io/ISBRA"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="google-site-verification" content="c8xLy6CbRSnA2A3H8CUama6rq8hjtG1c_lBvFhO_nYs" />
      </Head>
      <Component />
    </Layout>
  );
}

export default Application;
