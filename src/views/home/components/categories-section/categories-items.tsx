import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardProp } from "@/components/Card/card.tsx";
import { useTranslate } from "@/context/language-provider.tsx";
import { Pagination } from "flowbite-react";
export const CategoriesItems = () => {
  const [data, setData] = useState<CardProp[]>([]);
  const { dictionary }: any = useTranslate();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetcher = async () => {
      const res = await axios.get("http://localhost:3001/all-adv");
      if (res.status === 200) setData(res.data);
      else setData([]);
    };
    fetcher();
  }, []);

  const onPageChange = (page: number) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * 5;
  const endIndex = Math.min(startIndex + 5, data.length);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 ms-8 text-black dark:text-gray-300">
        {dictionary?.category?.category_title}
      </h2>
      <div className="w-full grid xl:grid-cols-5  sm:grid-cols-3 grid-cols-1  gap-y-4 justify-items-center">
        {data.length < 1 ? (
          <p className="text-center col-span-8 dark:text-lite-white">
            {dictionary?.no_data}
          </p>
        ) : (
          data
            .slice(startIndex, endIndex)
            .map((item: any) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))
        )}
      </div>
      {data?.length >= 5 && (
        <div className="flex overflow-x-auto justify-center mt-2">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.length / 5)}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      )}
    </div>
  );
};
