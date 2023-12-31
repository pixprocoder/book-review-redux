import {
  Box,
  Grid,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import SingleReviewCard from "./SingleReviewCard";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          Reviews
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
