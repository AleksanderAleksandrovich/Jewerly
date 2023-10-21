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
  jewerlyItem: JewerlyItem[]
  //jewerlyCountInBusket: number
}
export const useBasketStore = create<StoreBuying>((set, get) => ({
  jewerlyItem: [],
  // decrItemCount,
  // getItemCount,
  incrItemCount: (id, count) =>
    set((state) => {
      if (state.jewerlyItem.find((i) => i.id === id) == null) {
        return { jewerlyItem: [...state.jewerlyItem, { id: id, count: count }] }
      } else {
        return {
          jewerlyItem: state.jewerlyItem.map((i) => {
            if (i.id === id) {
              return { ...i, count: i.count + count }
            } else return { ...i }
          }),
        }
      }
    }),

  // jewerlyCountInBusket: get().jewerlyItem
  //   ? get().jewerlyItem.reduce((acc, item) => acc + item?.count, 0)
  //   : 0,

  // removeItemFromCard,
}))
