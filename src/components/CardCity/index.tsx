import { Flex, Img, Box, Text, SimpleGrid, Heading } from "@chakra-ui/react";

interface CardCityProps {
  cityImage: string;
  cityName: string;
  country: string;
  countryFlag: string;
}

export default function CardCity({
  cityImage,
  cityName,
  country,
  countryFlag,
}: CardCityProps) {
  return (
    <Box
      width={200}
      height={280}
      borderRadius="8"
      borderColor="orange.900"
      borderWidth="1px"
    >
      <Img
        src={cityImage}
        alt="cidades_100"
        width="100%"
        height="60%"
        objectFit="cover"
        display="block"
        borderTopRadius="8"
      />
      <Flex my="4" mx="4" justifyContent="space-between" align="center">
        <Box>
          <Heading fontSize="20px" mb="4">
            {cityName}
          </Heading>
          <Text fontSize="12px">{country}</Text>
        </Box>
        <Img
          src={countryFlag}
          alt="país"
          width="30px"
          height="30px"
          objectFit="cover"
          display="block"
          borderTopRadius="50%"
        />
      </Flex>
    </Box>
  );
}
