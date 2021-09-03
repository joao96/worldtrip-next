import { Flex, Img, Text, Button } from "@chakra-ui/react";

interface CarouselContinentItemProps {
  continent: string;
  description: string;
  image: string;
}

export function CarouselContinentItem({
  continent,
  description,
  image,
}: CarouselContinentItemProps) {
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
        <Text fontSize={["20px", "20px", "32px", "32px"]} fontWeight="bold">
          {continent}
        </Text>
        <Text
          fontSize={["14px", "14px", "20px", "20px"]}
          fontWeight="bold"
          color="light.300"
        >
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
