import { useRouter } from "next/router";

import { useEffect, useState } from "react";

export default function WithAuth(Component: any | JSX.Element) {
  const router = useRouter();
  const [isLogin, setLogin] = useState<any>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setLogin(!isLogin);
    }
  }, [isLogin]);
  return () => {
    if (!isLogin) {
      router.push(`/login?next=${router.asPath}`);
    }
    return <Component {...arguments} />;
  };
}

// export default function WithAuth(WrappedComponent: any) {
//   const router = useRouter();
//   return (props: JSX.IntrinsicAttributes) => {
//     // checks whether we are on client / browser or server.
//     if (typeof window !== "undefined") {
//       const accessToken = localStorage.getItem("accessToken");

//       // If there is no access token we redirect to "/" page.
//       if (!accessToken) {
//         router.replace("/login");
//         return null;
//       }

//       // If this is an accessToken we just render the component that was passed with all its props

//       return <WrappedComponent {...props} />;
//     }

//     // If we are on server, return null
//     return null;
//   };
// }
