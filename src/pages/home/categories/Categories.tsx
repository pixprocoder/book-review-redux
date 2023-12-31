import {
  Box,
  Grid,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SingleCategory from "./SingleCategory";

const Categories = () => {
  const slidesPerView = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 3,
    lg: 4,
  });
  return (
    <Box my={30}>
      <Text fontSize="2xl">Categories</Text>
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
