import { ChampionResponse } from "@/app/api/types/Champion";

interface Item {
  id: string;
  name: string;
  description: string;
  // 필요한 다른 필드들도 추가
}

export async function fetchChampionList() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch champion data");
  }
  const data: ChampionResponse = await res.json();
  return Object.values(data.data);
}

export async function fetchChampionDetail(id: string) {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${id}.json`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch champion details");
  }
  const data = await res.json();
  return data.data[id];
}

export async function fetchItemList() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch item data");
  }
  const data = await res.json();

  const itemData: Record<string, Item> = data.data;

  return Object.entries(itemData).map(([id, item]) => ({
    id,
    ...item,
  }));
}
