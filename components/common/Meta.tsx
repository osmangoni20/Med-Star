import Head from "next/head";

interface Imeta {
  title: string;
  name: string;
  description: string;
}
const Meta = ({ title, description, name }: Imeta) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={name} content={description} />
      </Head>
    </div>
  );
};

export default Meta;
