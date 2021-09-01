import { Flex, Img, Box, Text } from "@chakra-ui/react";

interface TravelType {
  image: string;
  alt: string;
  text: string;
}

export function TravelType({ image, text, alt }: TravelType) {
  return (
    <Flex
      p={["6", "8"]} //responsividade
      flexDirection="column"
      align="center"
      justify="center"
    >
      <Img src={image} alt={alt} width="85px" height="85px" />
      <Text fontSize="sm" fontWeight="bold" mt="4">
        {text}
      </Text>
    </Flex>
  );
}
