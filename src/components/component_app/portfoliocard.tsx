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
  Container,
} from "@chakra-ui/react";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel,
} from "../chakraCarousel";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <Container maxW={"100%"} p={"40px 0"}>
      <Flex flexDirection={"column"}>
        <VStack align={"start"} spacing={4}>
          <Heading
            fontFamily={serifDisplay.style.fontFamily}
            textAlign={"left"}
            as={"h3"}
          >
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
        </VStack>
        <Container maxW={"70%"}>
          <Carousel>
            <VStack>
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
              <Toolbar imageLen={portfolio?.images?.length} />
            </VStack>
          </Carousel>
        </Container>
      </Flex>
    </Container>
  );
};

const Toolbar = ({ imageLen }: { imageLen: number | undefined }) => {
  const { onNext, onPrevious } = useCarousel();
  if (imageLen == undefined) {
    return <></>;
  }
  return (
    <Flex w="full" justify="center">
      <HStack>
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
      </HStack>
    </Flex>
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
