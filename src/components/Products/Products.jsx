import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1,name: 'Shoes', description: 'Running Shoes.', price: '$120'},
    {id: 2,name: 'Macbook', description: 'Apple Macbook.', price: '$1200'},
    {id: 3,name: 'Surface Pro 9', description: 'Microsoft Surface Pro 9.', price: '$1289'},
];

const Products = () => {
    return(
        <main>
            <Grid container justifycontent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;