import { ItemCard } from "@/components/Card";
import { fetchItemList } from "../../utils/serverApi";

export default async function ItemsPage() {
  const items = await fetchItemList();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
