import { FC, MouseEvent, useState, useRef } from "react";
import { cl } from "../utils";

export const Dropdown: FC<{
  options: { label: string; onClick?: (e: MouseEvent<HTMLDivElement>) => void }[];
}> = ({ children, options }) => {
  const [opened, setOpened] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function closeDropdown() {
    setOpened(false);
  }

  function handleEnter() {
    setOpened(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(closeDropdown, 500);
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div>{children}</div>
      <div
        className={cl(
          "absolute -right-1 min-w-[100%] bg-white text-black shadow-lg mt-1 flex flex-col border border-gray-200 z-30",
          {
            hidden: !opened,
          }
        )}
        onClick={closeDropdown}
      >
        {options.map((option) => (
          <div
            key={option.label}
            className="hover:bg-black/10 cursor-pointer text-center px-1 py-1"
            onClick={option.onClick}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};
