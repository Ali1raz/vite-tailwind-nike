import React from 'react';
import {Header, Footer, Hero, ImageSection, PopularProducts} from './sections'
import { bigShoe1 } from './assets/images';

function App() {
  const [shoe, setShoe] = React.useState(bigShoe1);

  return (
      <div className='font-poppins'>
        <Header />
        <Hero activeShoe={shoe} setShoe={setShoe} />
        <ImageSection />
        <PopularProducts />
        <Footer />
      </div>
  
  )
}

export default App
