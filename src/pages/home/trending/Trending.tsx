import { Box, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import SingleTrending from "./SingleTrending";

// swiper
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TrendingBook = () => {
  const slidesPerView = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
  });

  return (
    <Box my={20}>
      <Box mb={5}>
        <Text
          color="#0078FF"
          fontSize="3xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          Trending This week
        </Text>
        <Text textAlign="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          iure et saepe mollitia vero, adipisci asperiores{" "}
        </Text>
      </Box>
      <Box>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SimpleGrid columns={slidesPerView} spacing={4} w="100%">
            <SwiperSlide>
              <SingleTrending />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTrending />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTrending />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTrending />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTrending />
            </SwiperSlide>
          </SimpleGrid>
        </Swiper>
      </Box>
    </Box>
  );
};

export default TrendingBook;
