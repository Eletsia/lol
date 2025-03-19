import { fetchChampionDetail } from "../../../utils/serverApi";
import Image from "next/image";
import { Metadata } from "next";

type ChampionDetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: ChampionDetailPageProps): Promise<Metadata> {
  const champion = await fetchChampionDetail(params.id);
  return {
    title: `${champion.name} - ${champion.title}`,
    description: champion.blurb,
  };
}

export default async function ChampionDetailPage({
  params,
}: ChampionDetailPageProps) {
  const champion = await fetchChampionDetail(params.id);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">
        {champion.name} - {champion.title}
      </h1>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={200}
        height={200}
        className="my-4 rounded-lg"
      />
      <p>{champion.blurb}</p>
    </div>
  );
}
