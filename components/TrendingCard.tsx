import Image from "next/image"
import { IMG_PATH } from "@/lib/fetch";

type TrendingCardProps = {
  image: string;
  id: number;
  title?: string;
  name?:string
};

const TrendingCard = ({image,title,id,name}:TrendingCardProps) => {
  console.log(title||name);
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={`${IMG_PATH + image}`}
        alt=""
        height={144}
        width={280}
        className="rounded-md"
      />
      <h3 className="text-slate-300 font-semibold">{title || name}</h3>
    </div>
  );
}

export default TrendingCard