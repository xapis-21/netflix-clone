import { IMG_PATH } from "@/lib/fetch";
import Image from "next/image";

type MovieCardProps = {
  poster_path: string;
  id: number;
  title: string;
};

const MovieCard = ({poster_path,id,title}:MovieCardProps) => {
  return (
    <Image src={IMG_PATH + poster_path} alt="" height={280} width={144} className="h-48 object-cover rounded-md"/>
  );
};

export default MovieCard;
