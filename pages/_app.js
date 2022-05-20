import Layout from "../components/Layout/Layout";
import Head from "next/head";

import "../public/styles/global.css";

function Application(props) {
  const { Component } = props;

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="google-site-verification" content="c8xLy6CbRSnA2A3H8CUama6rq8hjtG1c_lBvFhO_nYs" />
      </Head>
      <Component />
    </Layout>
  );
}

export default Application;
