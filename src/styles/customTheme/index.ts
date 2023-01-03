import "swiper/css";
import "swiper/css/pagination";


import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";


const customTheme = extendTheme({
  fonts,
  components: {},
});

export default customTheme;