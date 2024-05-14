import { useTranslate } from "@/context/language-provider.tsx";

export const IntroductionContain = () => {
  const { dictionary }: any = useTranslate();

  return (
    <div className="absolute top-56 left-[32%] text-center text-white">
      <h1 className="font-bold lg:text-4xl sm:text-2xl text-base">{dictionary?.introduction?.title}</h1>
      <h4 className="font-medium lg:text-xl sm:text-sm text-xs mt-1">
        {dictionary?.introduction?.description}
      </h4>
    </div>
  );
};
