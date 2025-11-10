import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios/index";

interface QueryType {
  pathname: string;
  url: string;
  params?: object
}

export const useQueryHandler = (props: QueryType) => {
  const axios = useAxios();
  const {pathname, url, params} = props;
  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url, params }),
    
  });
};