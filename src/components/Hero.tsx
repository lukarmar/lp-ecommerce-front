import {
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { DotLoader } from 'react-spinners'


import { Card } from "./Marketplace/Card";

import { useDataProducts } from 'hooks/RequestDataProducts'

const Hero = () => {  
  const { getDataProducts, products, isLoading } = useDataProducts()

  useEffect(() => {
    getDataProducts()
  }, [getDataProducts])

  return (
    <Flex
      w="full"
      h="full" minH="100vh"
      pb={{ base: 28, lg: 0 }}
      mt={20}
      mb={{ base: 0, md: 20 }}
      justify="center"
    >
      <Flex
        w="full"
        h={isLoading ? "80vh" : "full"}
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "center" }}
        justify="center"
        // justify={{ base: "normal", lg: "space-between" }}
        px={{ base: 6, md: 16 }}
        pt={{ base: 0, md: 7, lg: 2, "2xl": 7 }}
        maxW="1440px"
        pos="relative"
      >
      { isLoading ? <DotLoader size={180} color="#222f3e"/> :
        <Grid
          templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 2fr)",
          lg: "repeat(3, 1fr)",
           }}
           gap={10}
           rowGap={14}
          >
            {products.map((product, index, arr) => (
              <GridItem key={(index * (Math.random() * arr.length)).toString()}>
                <Card {...product}/>
              </GridItem>
            ))}
          </Grid>
        }
      </Flex>
    </Flex>
  );
};

export default Hero;
