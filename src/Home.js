import React from "react";
import Itemcard from './Itemcard';
import {useState,useEffect} from 'react';
const Home=()=>{

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProductData(data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
    return(
         <>
           <h1 className="text-center mt-3">All Items</h1>
           <section className="py-4 container">
            <div className="row justify-content-center">
                {productData && (
                    productData.map((item)=>{
                        return(
                            <Itemcard img={item.images[0]} title={item.title} desc={item.description} price={item.price} item={item} key={item.id}  />
                        );
                    }))
                }

            </div>

           </section>
         </>
    );
};
export default Home;