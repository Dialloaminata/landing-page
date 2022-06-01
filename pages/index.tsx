import type { GetServerSideProps, NextPage, } from "next";
import { TopBar } from "../sections/TopBar";
import { Hero } from "../sections/Hero";
import { Vision } from "../sections/Vision";
import { Footer } from "../sections/Footer";
import { DEFAULT_LANG, LANG_COOKIE } from "../utils/constants";
import { getBrowserLanguage } from "../utils";

const Home: NextPage = () => {
  return (
    <div>
      <div className="max-w-full flex flex-col min-h-screen">
        <TopBar />
        <Hero />
      </div>
      <Vision />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let initialLang;

  block: {
    const chosenLang = ctx.req.cookies[LANG_COOKIE];
    if (["en", "fr"].includes(chosenLang)) {
      console.log("cookie lang ", chosenLang);
      initialLang = chosenLang;
      break block;
    }

    const browserLang = getBrowserLanguage(ctx.req.headers["accept-language"]);
    if (["en", "fr"].includes(browserLang)) {
      console.log("browser lang ", browserLang);
      initialLang = browserLang;
      break block;
    }

    console.log('default lang', DEFAULT_LANG);

    initialLang = DEFAULT_LANG;
  }

  return { props: { initialLang } };
};

export default Home;
