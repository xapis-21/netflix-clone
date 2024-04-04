import TrendingCard from "@/components/TrendingCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "./Container";

type TrendingProps = {
  movies: {
    backdrop_path: string;
    id: number;
    title: string;
  }[];
};

const Trending = ({ movies }: TrendingProps) => {
  return (
    <section>
      <Container>
        <h2 className="text-white text-2xl py-8 uppercase">Trending</h2>
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {movies.map(({ backdrop_path, id, title }, index) => (
                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/5">
                  <TrendingCard image={backdrop_path} id={id} title={title} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Trending;
