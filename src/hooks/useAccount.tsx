import { useEffect, useState } from "react";

interface AccountProps {
  id: string;
  username: string;
  email: string;
  password: string;
  morality: boolean;
  avatar: string;
}
export const useAccount = () => {
  const [account, setAccount] = useState<AccountProps | null>(null);

  const jsonData = sessionStorage.getItem("account");

  useEffect(() => {
    const accountData = jsonData && JSON.parse(jsonData);
    setAccount(accountData);
  }, [jsonData]);

  return { account };
};
