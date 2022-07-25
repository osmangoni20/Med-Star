import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import AuthProvider from "../components/Context/AuthProvider";
import { store } from "../State/Store";
import "../styles/Sass/global/_global.scss";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <Provider store={store}>
      <AuthProvider>
        <Component className="container" {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
