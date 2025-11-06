import { type ReactNode } from 'react'
import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query'; "react-query"
const ProviderConf = ({childern}: {childern: ReactNode}) => {
    const queryClient = new QueryClient();
  return 
    <QueryClientProvider client={queryClient}>{childern}</ QueryClientProvider>;
};

export default ProviderConf;
