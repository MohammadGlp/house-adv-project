import { IntroductionSection } from "@/views/home/components/introduction-section";
import { CategoriesSection } from "@/views/home/components/categories-section";

const HomePage = () => {
  return (
    <main className="pt-20 pb-[270px] flex flex-col gap-40">
      <IntroductionSection />
      <CategoriesSection />
    </main>
  );
};

export default HomePage;
