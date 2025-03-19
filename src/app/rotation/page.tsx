"use client";

import { useEffect, useState } from "react";
import { fetchChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { ChampionCard2 } from "@/components/Card";

interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  image: { full: string };
}

export default function ChampionRotationPage() {
  const [rotation, setRotation] = useState<number[] | null>(null);
  const [champions, setChampions] = useState<Champion[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const rotationData = await fetchChampionRotation();
        setRotation(rotationData.freeChampionIds);

        const championList = await fetchChampionList();
        setChampions(championList);
      } catch (error: unknown) {
        setError("데이터를 가져오는 중 오류가 발생했습니다.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  const rotationChampions = champions?.filter((champ) =>
    rotation?.includes(parseInt(champ.key))
  );

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {rotationChampions?.map((champion) => (
          <ChampionCard2 key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}
