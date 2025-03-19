import { fetchChampionList } from "../../utils/serverApi";
import { ChampionCard } from "../../components/Card";
import { ChampionData } from "../api/types/Champion";

export const revalidate = 86400;

export default async function ChampionsPage() {
  const champions: ChampionData[] = await fetchChampionList();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {champions.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </div>
  );
}
