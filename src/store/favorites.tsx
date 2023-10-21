import { create } from 'zustand'

type JewerlyItemFavorites = {
  id: number
  isfavorites: boolean
}

type StoreFavorites = {
  changeFavorites: (id: number, isfavorites: boolean) => void

  jewerlyItemFavorites: JewerlyItemFavorites[]
}
export const useFavoriteStore = create<StoreFavorites>((set) => ({
  jewerlyItemFavorites: [],

  changeFavorites: (id, isfavorites) =>
    set((state) => {
      if (state.jewerlyItemFavorites.find((i) => i.id === id) == null) {
        return {
          jewerlyItemFavorites: [
            ...state.jewerlyItemFavorites,
            { id: id, isfavorites: isfavorites },
          ],
        }
      } else {
        return {
          jewerlyItemFavorites: state.jewerlyItemFavorites.map((i) => {
            if (i.id === id) {
              return { ...i, isfavorites: isfavorites }
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
