import { Box, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import SingleReviewCard from "./SingleReviewCard";
// swiper
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
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
          Reviews
        </Text>
        <Text textAlign="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          iure et saepe mollitia vero{" "}
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
              <SingleReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <SingleReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <SingleReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <SingleReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <SingleReviewCard />
            </SwiperSlide>
          </SimpleGrid>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Reviews;
