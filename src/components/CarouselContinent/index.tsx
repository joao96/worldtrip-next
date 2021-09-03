import { Box, Img, Flex, Text, Image } from "@chakra-ui/react";
// import Swiper core and required modules

import { CarouselContinentItem } from "./CarouselContinentItem";
import { theme } from "../../styles/theme";
import styles from "./styles.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function CarouselContinent() {
  return (
    <Box maxWidth={1240} height={450} mx="auto" mb="16">
      {/* <SwiperContinentItem
          continent="Europa"
          description="O continente mais antigo"
          image="/images/continent_europe.svg"
        /> */}
    </Box>
  );
}
