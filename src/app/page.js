import DeleteAllItems from '@/components/DeleteAllItems';
import Item from '@/components/Item';
import { nodbUrl, writeToken } from '@/config';
const headers = { token: writeToken };

export default async function Items() {
  const req = await fetch(`${nodbUrl}/items?__sort_by=itemName`, { method: 'GET', headers, next: { tags: ['items'] } });
  const { items = [] } = await req.json();
  return (
    <div className="items-page container m-4">
      <div className="items flex flex-wrap">
        {items.map((item, i) => <Item key={i} {...item} />)}
      </div>
      <div className="container m-4"><DeleteAllItems /></div>
    </div>
  );
}

