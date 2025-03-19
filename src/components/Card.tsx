import Image from "next/image";
import Link from "next/link";
import { ChampionData } from "../app/api/types/Champion";

type ChampionCardProps = {
  champion: ChampionData;
};

export function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <Link
      href={`/champions/${champion.id}`}
      className="block p-4 border rounded-lg shadow-md"
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={80}
        height={80}
      />
      <p className="mt-2 text-center font-semibold">{champion.name}</p>
      <p className="mt-2 text-center font-semibold">{champion.title}</p>
    </Link>
  );
}

type ItemCardProps = {
  item: {
    id: string;
    name: string;
    image: { full: string };
    gold: { base: number; sell: number };
    description: string;
  };
};

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="block p-4 border rounded-lg shadow-md">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
        alt={item.name}
        width={80}
        height={80}
      />
      <p className="mt-2 text-center font-semibold">{item.id}</p>
      <p className="mt-2 text-center font-semibold">{item.name}</p>
      <p className="mt-2 text-center font-semibold">구매시{item.gold.base}</p>
      <p className="mt-2 text-center font-semibold">판매시{item.gold.sell}</p>
      <p
        className="mt-2 text-center font-semibold"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </div>
  );
}

type ChampionCardProps2 = {
  champion: {
    id: string;
    name: string;
    title: string;
    image: { full: string };
  };
};

export function ChampionCard2({ champion }: ChampionCardProps2) {
  return (
    <Link
      href={`/champions/${champion.id}`}
      className="block p-4 border rounded-lg shadow-md"
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={80}
        height={80}
      />
      <p className="mt-2 text-center font-semibold">{champion.name}</p>
      <p className="mt-2 text-center font-semibold">{champion.title}</p>
    </Link>
  );
}
