import Container from "@/components/Container";

import Image from "next/image";
import { IMG_PATH } from "@/lib/fetch";
import { describe } from "node:test";

type HeroProps = {
  movie: { id: number; title: string; image: string; description:string };
};

const Hero = ({ movie }: HeroProps) => {

  const { id, title, image, description } = movie

  return (
    <section className="w-full relative">
      <Image
        src={IMG_PATH + image}
        alt="hh"
        width={1000}
        height={680}
        className="absolute top-0 left-0 -z-50 w-full h-full object-cover "
      />
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-gray-900  -z-40" />
      <Container>
        <div className="w-full h-screen max-h-[640px] flex items-center">
          <div className="flex flex-col max-w-[480px] gap-4">
            <h1 className="text-4xl text-white font-bold">{title}</h1>
            <p className="text-slate-200">
              {description}
            </p>
            <button className="bg-red-600 py-2.5 w-fit px-5 mt-8 rounded-md text-gray-900">
              Watch Trailer
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
