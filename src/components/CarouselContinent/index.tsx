import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CarouselContinentItem } from "./CarouselContinentItem";

export function CarouselContinent() {
  function handleClick(item) {
    console.log(item);
  }

  const mockContinents = [
    {
      continent: "Europa",
      description: "O continente mais antigo",
      image: "/images/carousel_europa.svg",
    },
    {
      continent: "Europa",
      description: "O continente mais antigo",
      image: "/images/carousel_europa.svg",
    },
    {
      continent: "Europa",
      description: "O continente mais antigo",
      image: "/images/carousel_europa.svg",
    },
    {
      continent: "Europa",
      description: "O continente mais antigo",
      image: "/images/carousel_europa.svg",
    },
  ];

  return (
    <Box maxWidth={1240} height={450} mx="auto" mb="16">
      <Carousel showStatus={false}>
        {mockContinents.map((item) => (
          <Link href="/continent" passHref key={item.continent}>
            <Button
              key={item.continent}
              width="100%"
              height="100%"
              variant="unstyled"
            >
              <CarouselContinentItem
                continent={item.continent}
                description={item.description}
                image={item.image}
              />
            </Button>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
}
