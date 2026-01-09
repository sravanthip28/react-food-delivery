import React, { useContext } from 'react'
import './DisplayFoodItems.css'
import { StoreContext } from '../../context/storeContext'
const DisplayFoodItems = () => {
    const {food_list} = useContext(StoreContext);
  return (
    <div>
      
    </div>
  )
}

export default DisplayFoodItems
