import type { GetServerSideProps, NextPage } from "next";
import { DEFAULT_LANG, LANG_COOKIE } from "../utils/constants";
import { getBrowserLanguage } from "../utils";
import { FC } from "react";
import { useLang, useTranslation } from "../providers/i18n";
import { TopBar } from "../sections/TopBar";
import { Button } from "../components/Button";
import Link from 'next/link'

const Openshift: NextPage = () => {
    return (
        <div>
            <div className="max-w-full flex flex-col min-h-screen">
                <TopBar />
                <Background />
                <Main />
            </div>
        </div>
    );
};

const Background: FC<{}> = () => {
    const backgroundImage = "url(/bg6.jpg)";
    const translate = useTranslation();
    return (
        <div className="flex-1 flex relative pb-[50px] md:pb-[60px] px-[20px]">
            <div className="absolute -top-2 -left-2 -right-0 -bottom-0 bg-cover opacity" style={{ backgroundImage, filter: 'blur(3px)' }}></div>

            <div className="z-10 absolute bottom-0 left-[0px]  mx-auto h-[50px] w-[240px] md:h-[60px] justify-center items-center hover:bg-white/20 cursor-pointer hidden md:flex">
                <img src="/accel-logo.png" className="h-3/5 my-auto" />
            </div>
            <div className="flex flex-1 relative justify-center items-center opacity">
                <div
                    style={{ backgroundImage }}
                    className="absolute left-0 right-0 top-0 bottom-0 bg-cover"
                />
            </div>
        </div>
    )
}

const Main: FC<{}> = () => {
    const translate = useTranslation();
    const lang = useLang();
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-white/30 overflow-hidden rounded-lg shadow-lg w-5/6 max-w-[1200px] h-max m-auto">
            <div className="relative">
                <img className="w-full opacity-0" src="/openshift.png" />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-cover flex flex-col justify-center text-white gap-y-4 px-4 md:px-6 py-2" style={{ backgroundImage: "url(/openshift.png)" }}>
                    <p className="font-semibold text-5xl">Red Hat Openshift</p>
                    {lang === "en" ? (
                        <p className="max-w-[700px] text-xl 3xl:text-2xl">Welcome to your first cloud experience built with Openshift technology from Red Hat. <u><a href="https://google.com" target="_blank" rel="noopener noreferrer">Click Here</a></u> to learn more.</p>
                    ) : lang === "fr" ? (
                        <p className="max-w-[700px] text-xl 3xl:text-2xl">Bienvenue à votre première expérience Cloud développé avec la technologie Openshift de Red Hat. <u><a href="https://google.com" target="_blank" rel="noopener noreferrer">Cliquez ici </a></u> pour en savoir plus.</p>
                    ) : <></>}
                    <div className="flex gap-x-2">
                        <a href="https://console.apps.cluster.heritage.africa" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" label={translate({"en":"Access Console", fr:"Console d'accès"})} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <Link href="/">
                    <a className="z-10 h-[50px] w-[240px] md:h-[60px] flex hover:bg-white/20 flex gap-x-2 items-center justify-center font-semibold text-white cursor-pointer">
                        <i className="fas fa-chevron-left"></i>
                        <p className="text-xl">{translate({ en: "Return Home", fr: "Retourner" })}</p>
                    </a>
                </Link>
                <div></div>
                <a href="https://console.apps.cluster.heritage.africa" target="_blank" rel="noopener noreferrer" className="z-10 h-[50px] w-[240px] md:h-[60px] flex hover:bg-white/20 flex gap-x-2 items-center justify-center font-semibold text-white cursor-pointer">
                    <p className="text-xl">{translate({ en: "Access Console", fr: "Console d'accès" })}</p>
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>

        </div>
    )
}

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

export default Openshift;
