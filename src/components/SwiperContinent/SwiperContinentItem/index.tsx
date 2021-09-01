import { Flex, Img, Text } from "@chakra-ui/react";

interface SwiperContinentItemProps {
  continent: string;
  description: string;
  image: string;
}

export function SwiperContinentItem({
  continent,
  description,
  image,
}: SwiperContinentItemProps) {
  return (
    <>
      <Flex
        position="absolute"
        bottom="0"
        top="0"
        right="0"
        left="0"
        flexDir="column"
        alignItems="center"
        justify="center"
        color="light.700"
      >
        <Text fontSize="32px" fontWeight="bold">
          {continent}
        </Text>
        <Text fontSize="20px" fontWeight="normal">
          {description}
        </Text>
      </Flex>
      <Img
        src={image}
        alt="aviao"
        width="100%"
        height="100%"
        objectFit="cover"
        display="block"
      />
    </>
  );
}
