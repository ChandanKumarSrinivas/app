// 'use client';
import React from 'react'
import AddToCart from './AddToCart';
import styles from '../css/ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className='text-amber-500 text-xl'>
        <AddToCart/>
    </div>
  )
}

export default ProductCard
