import Layout from "../components/Layout/Layout";
import Head from 'next/head';
 
import "../public/styles/global.css";

function Application(props) {
  const { Component } = props;

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
        />
      </Head>
      <Component />
    </Layout>
  );
}

export default Application;
