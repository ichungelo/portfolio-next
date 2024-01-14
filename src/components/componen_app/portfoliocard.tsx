import { serifDisplay } from "@/app/fonts";
import { Portfolio } from "@/data/data";
import {
  Box,
  Button,
  Center,
  Flex,
  VStack,
  HStack,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel,
} from "chakra-framer-carousel";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <VStack>
      <Heading fontFamily={serifDisplay.style.fontFamily} textAlign={"left"}>
        <ChevronRightIcon color={"green"} />
        {portfolio.title}
      </Heading>
      <Heading size={"sm"} fontFamily={serifDisplay.style.fontFamily}>
        {portfolio.date}
      </Heading>
      <Text>{portfolio.description}</Text>
      <UnorderedList>
        {portfolio?.details?.map((detail) => {
          return <ListItem key={detail}>{detail}</ListItem>;
        })}
      </UnorderedList>
      <Carousel>
        <HStack>
          <PrevCarousel imageLen={portfolio?.images?.length} />
          <Center>
            <CarouselItems>
              {portfolio?.images?.map((image, index) => {
                return (
                  <CarouselItem index={index} key={image}>
                    <CardCarousel image={image} />
                  </CarouselItem>
                );
              })}
            </CarouselItems>
          </Center>
          <NextCarousel imageLen={portfolio?.images?.length} />
        </HStack>
      </Carousel>
    </VStack>
  );
};

const PrevCarousel = ({ imageLen }: { imageLen: number | undefined }) => {
  const { onPrevious } = useCarousel();
  if (imageLen == undefined) {
    return <></>;
  }
  return (
    <Button
      onClick={onPrevious}
      size="md"
      variant="link"
      fontFamily={serifDisplay.style.fontFamily}
      p={2}
      width={10}
      height={10}
      borderRadius="50%"
      _hover={{ bg: "green" }}
    >
      <ArrowBackIcon />
    </Button>
  );
};
const NextCarousel = ({ imageLen }: { imageLen: number | undefined }) => {
  const { onNext } = useCarousel();
  if (imageLen == undefined) {
    return <></>;
  }
  return (
    <Button
      onClick={onNext}
      size="md"
      variant="link"
      fontFamily={serifDisplay.style.fontFamily}
      p={2}
      width={10}
      height={10}
      borderRadius="50%"
      _hover={{ bg: "green" }}
    >
      <ArrowForwardIcon />
    </Button>
  );
};

const CardCarousel = ({ image }: { image: string }) => {
  const { onClickHandler, position } = useCarouselItem();
  const isCenter = position === "center";
  return (
    <Box
      boxSize={isCenter ? "500px" : "300px"}
      pos="relative"
      as="button"
      onClick={onClickHandler}
    >
      <Image
        alt={image}
        src={image}
        boxSize={isCenter ? "500px" : "300px"}
        objectFit="cover"
        objectPosition="center center"
        borderRadius={10}
        _hover={{
          scale: 1.1,
        }}
      />
    </Box>
  );
};

export { PortfolioCard };
