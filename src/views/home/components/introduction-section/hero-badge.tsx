import {useTranslate} from "@/context/language-provider.tsx";

export const HeroBadge = () => {
    const { dictionary }: any = useTranslate();

    return (
    <div className="px-4">
      <div className="relative w-full xl:h-[530px] lg:h-96 sm:h-80 h-60 bg-hero-badge bg-cover rounded-xl">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-500 rounded-xl" />
          <div className="absolute md:top-36 top-20 left-[32%] right-[32%] text-center text-white">
              <h1 className="font-bold lg:text-4xl sm:text-2xl text-base">{dictionary?.introduction?.title}</h1>
              <h4 className="font-medium lg:text-xl sm:text-sm text-xs mt-1">
                  {dictionary?.introduction?.description}
              </h4>
          </div>
      </div>
    </div>
  );
};
