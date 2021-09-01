import { Box, Img, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperContinentItem } from "./SwiperContinentItem";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function SwiperContinent() {
  return (
    <Box maxWidth={1240} height={450} mx="auto" mb="16">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperContinentItem
            continent="Europa"
            description="O continente mais antigo"
            image="/images/continent_europe.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContinentItem
            continent="Europa"
            description="O continente mais antigo"
            image="/images/continent_europe.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContinentItem
            continent="Europa"
            description="O continente mais antigo"
            image="/images/continent_europe.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContinentItem
            continent="Europa"
            description="O continente mais antigo"
            image="/images/continent_europe.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContinentItem
            continent="Europa"
            description="O continente mais antigo"
            image="/images/continent_europe.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContinentItem
            continent="Europa"
            description="O continente mais antigo"
            image="/images/continent_europe.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContinentItem
            continent="Europa"
            description="O continente mais antigo"
            image="/images/continent_europe.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContinentItem
            continent="Europa"
            description="O continente mais antigo"
            image="/images/continent_europe.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContinentItem
            continent="Europa"
            description="O continente mais antigo"
            image="/images/continent_europe.svg"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
