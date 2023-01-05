import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Icon,
  Text,
  Tag
} from "@chakra-ui/react";
import { AiFillHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {  useState } from "react";
import { SliderImageCTA } from '../SliderImages'

import { useDataProducts } from 'hooks/RequestDataProducts'

import { RenderDataProducts } from 'types'

interface PropsRating {
  rating: number
}

export function Card({productId, title, brand, defaultPrice, percentage, discountPrice, rating, isFavorite, images, category }: RenderDataProducts) {
  const [dataFavorite, setDataFavorite] = useState(isFavorite)
  const { changeProductFavorite } = useDataProducts()


  return (
    <Flex w="full" pos="relative" shadow="lg" border="1px" borderColor="#ecf0f1">
      <Flex  direction={"column"} w="full" bg="white">
        <Flex w="full" pos="relative">
          <SliderImageCTA images={images}/>
          <Flex zIndex={1} pos="absolute" w={16} h={16} direction="column" justify="center" align="center" bgColor="whatsapp.500" color="#fff" right={0} top={0}>
            <Text fontSize={16} mb={-2}>{percentage}</Text>
            <Text fontSize={21}>OFF</Text>
          </Flex>
        </Flex>
        <Flex direction="column" px="5">
          <HStack mt="5" spacing="3">
              <Tag variant="outline">
                {category}
              </Tag>
          </HStack>
          <Flex justify="space-between" my="4">
            <Flex direction={"column"}>
              <Heading mb="2" size="md">
                {title}
              </Heading>
              <Heading size="sm" fontWeight="medium">
                {brand}
              </Heading>
            </Flex>
            <IconButton
              aria-label="IconButton"
              size="md"
              borderRadius="50"
              onClick={() => {
                setDataFavorite(!dataFavorite)
                setTimeout(() => changeProductFavorite(productId, !dataFavorite))
              }}
              _active={{ transform: 'scale(1.2)' }}
              icon={<AiFillHeart fontSize="30px" fill={dataFavorite ? 'tomato' : 'white'} />}
            />
          </Flex>
          <Flex >
            <PushClickedStars rating={rating}/>
          </Flex>
          <Flex direction="column">
            <Text as="span" fontSize="2xl" fontWeight="bold" color="#e84118">{discountPrice}</Text>
            <Text as="del" fontSize="xl" fontWeight="light" color="#718093">{defaultPrice}</Text>
          </Flex>
          <Center my="6" w="full">
            <Button colorScheme="green" w="full">Compre agora</Button>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
}


const PushClickedStars = ({ rating }: PropsRating) => {
  return (
    <div>
      {[1,2,3,4,5].map((_, index, array) => (
        <Icon
          key={Math.random() * array.length}
          as={(index + 1) <= rating ? AiFillStar : AiOutlineStar}
          fontSize="25px"
          cursor="pointer"
        />
      ))}
    </div>
  );
};
