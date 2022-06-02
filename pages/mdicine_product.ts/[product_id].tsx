import { GetStaticProps } from "next";

const SingleProduct = () => {
  return <div>Enter</div>;
};
export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/` + ctx.params.id
  );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};
export default SingleProduct;
