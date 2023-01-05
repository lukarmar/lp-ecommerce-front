import { Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useRef } from "react";

import logoFooter from "../../../public/logo.png";

const Footer = () => {
  const refFooter = useRef<HTMLDivElement>(null);
  const ageNow = new Date().getFullYear().toString();

  return (
    <Flex
      justify="center"
      bgColor="#222f3e"
      color="#FFFFFF"
      as="footer"
      w="full"
      h="72"
    >
      <Flex
        direction="column"
        align={{ base: "flex-start", sm: "center" }}
        justify="center"
        // px={{ base: 6, md: 16 }}
        // py={20}
        maxW="1440px"
        pos="relative"
      >
        <Flex direction="column" align="center" w="full" mb={14}>
          <Flex w="full" justify={"center"} maxW={96}>
            <Image 
              src={logoFooter}
              height={70} 
              width={70} 
              alt="Logo" 
              priority />
          </Flex>
          <Text
            as="span"
            w="full"
            maxW="600px"
            fontSize={{base: 14, md: 20 }}
            color="#cccccc"
            textAlign="center"
            mt={4}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </Flex>
      </Flex>
      <Flex
        w="full"
        bgColor="#ffffff13"
        justify="center"
        align="center"
        direction={{ base: "column", sm: "row" }}
        py={2}
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
      >
        <Text as="span" color="#ffffffb0">
          {`© Bora ${ageNow} -`}
        </Text>
        <Text as="span" color="#ffffffb0">
          &nbsp;Todos os direitos reservados
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
