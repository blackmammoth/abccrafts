import product from '@/sanity_ecommerce/schemas/product'
import React from 'react'
import { Product, FooterBanner } from '@/components'
import { client } from '@/lib/client';

const Home = ({products, bannerData}) => {
  {console.log(products[0]._id)}
  return (
    <div>
    <div className='products-heading'>
      <h2>Browse Our Collection</h2>
    </div>

    <div className='products-container'>
      {products?.map(
        (product) => <Product key={product._id} product={product}/>
        
      )}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[1]}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);


  return {
    props: { products, bannerData }
  }
}

export const config = {
  api: {
    responseLimit: false,
  },
}

export default Home
