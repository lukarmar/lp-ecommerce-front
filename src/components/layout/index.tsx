import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      transition="0.5s ease-out"
      pos="relative"
    >
      <Header />
      <Flex as="main" w="full"  direction="column" bgColor={"#ecf0f1"}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;