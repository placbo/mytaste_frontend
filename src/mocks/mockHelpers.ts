import { Item } from '../types';

export function removeMockItemByIdFromItemList(items: Item[], itemId: string | undefined) {
  for (let i = items.length - 1; i >= 0; --i) {
    if (items[i].itemId == itemId) {
      items.splice(i, 1);
    }
  }
  return items;
}
