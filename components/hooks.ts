import { useRouter } from "next/router";

export const usePathNameU = () => {
  const router = useRouter();
  const pathName = router?.asPath?.split("/")[1];
  if (pathName) {
    return `${pathName[0].toUpperCase() + pathName.slice(1)}`;
  } else if (router.pathname === "/") return "Home";
};
