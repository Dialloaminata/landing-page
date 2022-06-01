import { DEFAULT_LANG } from "./constants";

export const cl = (...classNames: Array<string | { [key: string]: any } | undefined>): string => {
    return classNames
      .map(className => {
        if (typeof className === "undefined") return undefined;
        if (typeof className === "string") return className;
  
        const [key, condition] = Object.entries(className)[0];
        if (!condition) return undefined;
  
        return key;
      })
      .filter(val => val)
      .join(" ");
  };


  export function getBrowserLanguage(acceptLangHeader?: string): string {
    if(acceptLangHeader?.includes("en")) return "en";
    if(acceptLangHeader?.includes("fr")) return "fr";
    return ""
  }