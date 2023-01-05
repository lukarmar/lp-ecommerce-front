/* eslint-disable import/prefer-default-export */
import { Flex, Skeleton } from "@chakra-ui/react";
import SwiperCore, {
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

SwiperCore.use([Pagination]);

interface PropSliderImage {
  images: string[]
}


const SliderImageCTA = ({ images }: PropSliderImage) => {
  return (
    <Flex
      sx={{
        ".swiper": {
          display: "flex",
          width: "100%",
          height: "100%",
          pos: "relative",
          // maxWidth: "480px",
        },
        ".swiper-slide": {
          display: "flex",
          width: "100% !important",
          height: "100%",
          maxH: "320px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        },

        ".swiper-slide img": {
          display: "flex",
          width: "100% !important",
          height: "100% !important",
          objectFit: "cover",
          objectPosition: "top",
        },

        ".swiper-pagination": {
          left: "10px",
          bottom: "10px",
          width: "auto !important",
          height: "30px",
          padding: "2px 10px",
          borderRadius: "30px",
          opacity: "0.7",
          backgroundColor: "#fff"
        }

      }}
    >
      <Swiper 
        pagination={{ 
          type: "fraction",
          renderFraction(currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' +
                    ' - ' +
                    '<span class="' + totalClass + '"></span>';
          },
          enabled:  true
          }}>
           {images.map((image, index, arr) => (
            <SwiperSlide key={(index * (Math.random() * arr.length)).toString()}>
              <Flex h="full" w="full" minH="320px" justify="center" align="center" bg="gray.100">
              {!image ? <Skeleton w="480px" h="320px" /> :
                <Image
                  src={image}
                  alt="Images Default"
                  width={480}
                  height={320}
                  loading="eager"
                  />
                }
                </Flex>
            </SwiperSlide>
          ))}
      </Swiper>
    </Flex>
  );
};

export { SliderImageCTA };




