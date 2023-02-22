import Head from "next/head";

function SEO({ title, desc, url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={`ISBRA 2022 - ${title}`} />
      <meta property="og:description" content={desc} />
    </Head>
  );
}

export default SEO;
