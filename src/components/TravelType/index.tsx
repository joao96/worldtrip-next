import {
  Flex,
  Img,
  Box,
  Text,
  useBreakpointValue,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

interface TravelType {
  image: string;
  alt: string;
  text: string;
  showImage: boolean;
}

export function TravelType({ image, text, alt, showImage }: TravelType) {
  return (
    <Flex
      flexDirection={showImage ? "column" : "row"}
      align="center"
      justify="center"
      minWidth={136}
    >
      {showImage ? (
        <Img src={image} alt={alt} width="85px" height="85px" />
      ) : (
        <Icon as={FaCircle} color="orange.900" boxSize="10px" mr="4" />
      )}
      <Text fontSize="16px" fontWeight="bold" mt={["0", "0", "0", "4"]}>
        {text}
      </Text>
    </Flex>
  );
}
