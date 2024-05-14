import { useNavigate } from "react-router-dom";

export interface CardProp {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
}

export const Card: React.FC<CardProp> = ({
  id,
  title,
  price,
  imageUrl
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-4 hover:shadow-lg hover:shadow-[#e2e2e2] p-2 cursor-pointer rounded-xl ease-in duration-500"
      onClick={() => navigate(`/${id}`)}
    >
      <img
        src={imageUrl}
        alt={`house ${title} image`}
        className="w-64 h-60 rounded-xl"
      />
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-xl dark:text-white">{title}</h3>
        <span className="text-[#3C4563] dark:text-gray-400">$ {price}</span>
        {/*<div className="flex gap-2 items-center">*/}
        {/*  <img*/}
        {/*    src={account.avatar}*/}
        {/*    alt={`${account.name} avatar`}*/}
        {/*    className="w-10 h-10 rounded-full"*/}
        {/*  />*/}
        {/*  <div>*/}
        {/*    <h4 className="font-bold">{account.name}</h4>*/}
        {/*    <p className="text-gray-500 text-sm">{account.location}</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
