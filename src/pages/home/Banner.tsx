import { Box, Image } from "@chakra-ui/react";

const Carousel = () => {
  const staticImages = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];

  return (
    <Box position="relative" height="400px">
      <Image
        style={{ borderRadius: "10px" }}
        src={staticImages[0]}
        alt={`banner`}
        height="100%"
        width="100%"
        objectFit="cover"
      />
    </Box>
  );
};

export default Carousel;
