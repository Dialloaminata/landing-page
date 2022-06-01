import { FC } from "react";
import { Dropdown } from "../components/Dropdown";
import { useLang } from "../providers/i18n";
import { LANG_COOKIE } from "../utils/constants";

export const TopBar: FC<{}> = () => {
  const lang = useLang();

  function handleSwitchLang(lang: "en" | "fr") {
    document.cookie = `${LANG_COOKIE}=${lang}`;
    window.location.reload();
  }

  return (
    <div className="absolute top-0 right-0 left-0  z-10 text-white h-[28px] flex items-center justify-between text-sm px-4">
      <div className="flex gap-x-1 items-center">
        {/* <p className="font-semibold">Ocepteur sint occaecat cupidatat non proident sunt in culpa.</p>
        <a href="">
          <i className="fas fa-arrow-right"></i>
        </a> */}
      </div>
      <div className="flex items-center gap-x-2">
        <a href="https://www.accel-tech.net" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-gray-200 cursor-pointer font-semibold">
          Accelerate Technologies
        </a>
        |
        <Dropdown
          options={[
            { label: "EN", onClick: (e) => handleSwitchLang("en") },
            { label: "FR", onClick: (e) => handleSwitchLang("fr") },
          ]}
        >
          <a className="text-gray-100 hover:text-gray-200 cursor-pointer font-semibold">
            <i className="fas fa-globe mr-1"></i>
            <span>{lang.toUpperCase()}</span>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};
