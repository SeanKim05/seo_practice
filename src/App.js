import "./App.css";
import { Helmet } from "react-helmet-async";

import fav from "./assets/favicon-16x16.png";
import favLg from "./assets/favicon-32x32.png";
import apple from "./assets/apple-touch-icon.png";
import android from "./assets/android-chrome-192x192.png";
import androidLg from "./assets/android-chrome-512x512.png";

function App() {
  return (
    <>
      <Helmet>
        <title>Seo Test...</title>
        <meta property="og:site_name" content="SEO Test" />
        <meta property="og:title" content="SEO Test Page" />
        <meta
          property="og:url"
          content="https://seo-practice-two.vercel.app/"
        />
        <meta property="og:description" content="SEO Test 입니다" />
        <meta property="og:image" content="" />

        <meta name="twitter:title" content="SEO Test Page" />
        <meta name="twitter:description" content="SEO Test 입니다" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="" />

        <link rel="icon" href="./assets/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href={apple} />
        <link rel="icon" type="image/png" sizes="192x192" href={android} />
        <link rel="icon" type="image/png" sizes="512x512" href={androidLg} />
        <link rel="icon" type="image/png" sizes="32x32" href={favLg} />
        <link rel="icon" type="image/png" sizes="16x16" href={fav} />
        {/* <link rel="manifest" href="./assets/site.webmanifest" /> */}
      </Helmet>
    </>
  );
}

export default App;
