import { useState } from "react";

interface Language {
  languages: string;
  setLanguages: (x: string) => void;
}

export const ButtonLang: React.FC<Language> = ({ languages, setLanguages }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group z-50 duration-200 flex items-center relative w-9 h-9 me-4 bg-white dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-[#5C5C5C] dark:text-white border ${
        open ? " rounded-t-lg" : "rounded-lg"
      }`}
    >
      <button
        className={`hover:bg-gray-100 bg-white dark:bg-dark-secondary dark:hover:bg-dark-tertiary w-full h-full cursor-pointer ${
          open ? " rounded-t-lg" : " rounded-lg"
        }`}
        onClick={() => setOpen((old) => !old)}
      >
        {languages}
      </button>

      {open ? (
        <div className="flex flex-col absolute top-9 -start-px w-9 h-fit border-b border-l border-r rounded-b-lg">
          <button
            className="hover:bg-gray-100 bg-white dark:bg-dark-secondary dark:hover:bg-dark-tertiary relative w-full h-full rounded-b-lg cursor-pointer"
            onClick={() => {
              setOpen(false);
              languages === "en" ? setLanguages("fa") : setLanguages("en");
            }}
          >
            {languages === "en" ? "fa" : "en"}
          </button>
        </div>
      ) : null}
    </div>
  );
};
