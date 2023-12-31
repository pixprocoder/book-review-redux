import { Box, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleCategory from "./SingleCategory";

const Categories = () => {
  const slidesPerView = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 3,
    lg: 4,
  });
  return (
    <Box my={50}>
      <Text fontSize="2xl" my={4} fontWeight="bold">
        Categories
      </Text>
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
              <SingleCategory />
            </SwiperSlide>
            <SwiperSlide>
              <SingleCategory />
            </SwiperSlide>
            <SwiperSlide>
              <SingleCategory />
            </SwiperSlide>
            <SwiperSlide>
              <SingleCategory />
            </SwiperSlide>
            <SwiperSlide>
              <SingleCategory />
            </SwiperSlide>
          </SimpleGrid>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Categories;
