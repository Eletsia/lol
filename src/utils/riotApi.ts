export async function fetchChampionRotation() {
  const response = await fetch("/api/rotation");
  if (!response.ok) {
    throw new Error("챔피언 로테이션 데이터를 가져오는 데 실패했습니다.");
  }
  const data = await response.json();
  return data;
}
