








































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
    name: string
  }[];
  title: string
};

const Trending = ({ movies,title }: TrendingProps) => {

  if (title === "Comedy TV Shows"){
    console.log(movies[0])
  }
    return (
      <section className="py-4">
        <Container>
          <h2 className="text-white text-xl pb-4 font-bold">{title}</h2>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {movies.map(({ backdrop_path, id, name }, index) => (
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
