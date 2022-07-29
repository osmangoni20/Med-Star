import { useRouter } from "next/router";

import { useEffect } from "react";

export default function WithAuth(Component: any) {
  return () => {
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        router.push(`/login?next=${router.asPath}`);
      }
    }, []);

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
