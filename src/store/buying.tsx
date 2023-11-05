import { create } from 'zustand'

type JewerlyItem = {
  id: number
  count: number
}

type StoreBuying = {
  // getItemCount: (id: number) => number
  // decrItemCount: (id: number) => void
  incrItemCount: (id: number, count: number) => void
  // removeItemFromCard: (id: number) => void
  jewerlyItems: JewerlyItem[]
  //jewerlyCountInBusket: number
}
export const useBasketStore = create<StoreBuying>((set, get) => ({
  jewerlyItems: [],
  // decrItemCount,
  // getItemCount,
  incrItemCount: (id, count) => {
    const { jewerlyItems } = get()

    const searchedItemIndex: number = jewerlyItems.findIndex(
      (item) => item.id === id
    )

    if (searchedItemIndex === -1) {
      const newItem: JewerlyItem = { id, count }
      set({ jewerlyItems: [...jewerlyItems, newItem] })
      return
    }

    jewerlyItems[searchedItemIndex].count += count

    set({ jewerlyItems: [...jewerlyItems] })
  },

  // jewerlyCountInBusket: get().jewerlyItem
  //   ? get().jewerlyItem.reduce((acc, item) => acc + item?.count, 0)
  //   : 0,

  // removeItemFromCard,
}))
