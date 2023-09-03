import React from "react";
import Product from "../components/product";

const PRODUCTS = [
    {
      id: 'p1',
      price: 60,
      name: 'My First Book',
      description: 'The first book I wrote',
    },
    {
      id: 'p2',
      price: 50,
      name: 'My Second Book',
      description: 'The second book I wrote',
    },
  ];

export default function Items(){
    return(<>
    <div className="headline">Buy your favorite products</div>
      <ul>
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul> 
    </>);
}