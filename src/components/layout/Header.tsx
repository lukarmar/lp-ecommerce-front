import { Flex, Image } from "@chakra-ui/react";

const Header = () => {

  return (
    <Flex
      as="header"
      w="full"
      h={16}
      bgColor="#222f3e"
      justify="center"
      boxShadow="sm"
      pos="fixed"
      zIndex="modal"
    >
      <Flex
        w="full"
        h="full"
        align="center"
        px={{ base: 5, lg: 16 }}
        maxW="1566px"
        pos="relative"
      >
        <Flex
          w={{ base: "full", lg: 'auto' }}
          h="full"
          align="center"
          py={2}
          pos="relative"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            w={10}
            cursor="pointer"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;