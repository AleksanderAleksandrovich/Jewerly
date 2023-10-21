import { useFavoriteStore } from '@/store/Favorites'
import React from 'react'

type Props = {}

const Catalog = () => {
  const fav = useFavoriteStore(st=>st.jewerlyItemFavorites)
  console.log(fav)
  return (
    <div>Catalog</div>
  )
}

export default Catalog