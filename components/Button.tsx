import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { FC } from "react";
import { cl } from "../utils";
import { Spinner } from "./Spinner";

type buttonprops = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<
  {
    label?: string;
    variant?: "default" | "dark" | "black";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
  } & buttonprops
> = ({ label, variant = "default", size = "md", isLoading, children, className, ...props }) => {
  const buttonClass = cl(
    "shadow-md hover:shadow-lg",
    { "bg-red-2 hover:bg-red-2/80 text-white": variant === "dark" },
    { "bg-red-1 hover:bg-red-1/80 text-white": variant === "default" },
    { "bg-black hover:bg-black/80 text-white": variant === "black" },
    { "text-md rounded-lg py-1 px-3": size === "sm" },
    { "text-md rounded-lg py-2 px-4": size === "md" },
    { "text-lg md:text-xl rounded-lg py-2 md:py-3 px-5 md:px-7": size === "lg" },
    { "opacity-50 pointer-events-none": props.disabled },
    { "pointer-events-none": isLoading },
    className
  );
  return (
    <button className={buttonClass} {...props}>
      {/*  */}
      {isLoading && <Spinner />}
      {!isLoading && (children || <span>{label}</span>)}
    </button>
  );
};
