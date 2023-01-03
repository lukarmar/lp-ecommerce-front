import { ReactNode } from "react";

import { RequestDataProducts } from "./RequestDataProducts";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return <RequestDataProducts>{children}</RequestDataProducts>
  
};

export default MainProvider;