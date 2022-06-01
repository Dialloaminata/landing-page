import { FC } from "react";
import { useTranslation } from "../providers/i18n";
import { cl } from "../utils";
import Link from 'next/link'

export const Hero: FC<{}> = () => {
  const backgroundImage = "url(/bg6.jpg)";
  const translate = useTranslation();
  return (
    <div className="flex-1 flex relative pb-[50px] md:pb-[60px] px-[20px]">
      <div className="absolute -top-2 -left-2 -right-0 -bottom-0 bg-cover" style={{ backgroundImage, filter: 'blur(3px)' }}></div>

      <a href="https://www.accel-tech.net" target="_blank" rel="noopener noreferrer" className="z-10 absolute bottom-0 left-[0px]  mx-auto h-[50px] w-[240px] md:h-[60px] justify-center items-center hover:bg-white/20 cursor-pointer hidden md:flex">
        <img src="/accel-logo.png" className="h-3/5 my-auto" />
      </a>

      <div className="z-10 absolute bottom-0 left-0 right-0 mx-auto h-[50px] w-[240px] md:h-[60px] hover:bg-white/20 gap-x-2 items-center justify-center font-semibold text-white cursor-pointer hidden md:flex" onClick={() => window.scrollTo({ top: 999 })}>
        <p className="text-xl">{translate({ en: "Read More", fr: "Lisez Plus" })}</p>
        <i className="fas fa-chevron-down"></i>
      </div>

      <Link href="/openshift">
        <a className="z-10 absolute bottom-0 right-0 mx-auto h-[50px] w-[240px] md:h-[60px] flex hover:bg-white/20 flex gap-x-2 items-center justify-center font-semibold text-white cursor-pointer">
          <p className="text-xl">{translate({ en: "Access our PaaS", fr: "Accedez a notre PaaS" })}</p>
          <i className="fas fa-chevron-right"></i>
        </a>
      </Link>

      <div className="flex flex-1 relative justify-center items-center">
        <div
          style={{ backgroundImage }}
          className="absolute left-0 right-0 top-0 bottom-0 bg-cover"
        />
        <div className="relative p-3 text-center">
          <p className="hero-text p" style={{ backgroundImage }}>{translate({ en: "Welcome to the", fr: "Bienvenu au" })} </p>
          <p className="hero-text h1 uppercase" style={{ backgroundImage }}>{translate({ en: "Heritage Project", fr: "Projet Heritage" })}</p>
        </div>
      </div>
    </div>
  )
}