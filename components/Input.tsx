import { FC, HTMLProps } from "react";
import { cl } from "../utils";

export const Input: FC<{ variant: "dark" | "light" } & HTMLProps<HTMLInputElement>> = ({
  className,
  variant = "light",
  ...props
}) => {
  const containerClass = cl(
    "text-md rounded-lg",
    { "bg-gray-800": variant === "dark" },
    { "bg-gray-100": variant === "light" }
  );
  const inputClass = cl("py-2 px-2 w-full bg-transparent outline-none", {
    "text-white": variant === "dark",
  });
  return (
    <div className={containerClass}>
      <input className={inputClass} type="email" {...props} />
    </div>
  );
};
