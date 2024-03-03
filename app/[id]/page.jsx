'use client'

import products from '@/public/products.json'
import SquareProvider from '../components/square-provider/square-provider'
import Link from 'next/link'

export default function Checkout({ params }) {
  const product = products.list.find((product) => product.id === params.id)

  if (product) {
    return (
      <main className='text-center'>
        <h1 className='pt-10 text-4xl'>{product.name}</h1>
        <h2 className='mt-10 text-xl'>Price: $ {product.price}</h2>
        <SquareProvider product={product} />
        <div className='absolute flex justify-center bottom-20 w-full'>
          <Link
            href='/'
            className='bg-blue-950 text-white border border-blue-500 rounded-md flex justify-center items-center w-20 h-8 hover:scale-105 transition-all'
          >
            Home
          </Link>
        </div>
      </main>
    )
  }
}
