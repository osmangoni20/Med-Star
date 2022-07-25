import { GetServerSideProps, GetServerSidePropsContext } from "next";

const useProtectRoute = (gssp: GetServerSideProps) => {
  //   const { user } = useFirebase();
  //   console.log(user);
  const user = true;
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;

    try {
      if (!user) {
        return {
          redirect: {
            permanent: false,
            destination: "/login",
          },
        };
      }
    } catch (error) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }
    // if (req.headers.cookie) {
    //   const { accessToken } = cookie.parse(req.headers.cookie);
    //   console.log(accessToken);

    // }
    return await gssp(ctx);
  };
};

export default useProtectRoute;
