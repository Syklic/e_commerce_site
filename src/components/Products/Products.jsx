import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles';

const products = [
    {id: 1,name: 'Shoes', description: 'Running Shoes.', price: '$120', image: 'https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw80fbd0fc/original/120356/120356-566-a-ghost-14-womens-neutral-cushion-running-shoe.png?sw=1388&sh=868&sm=cut'},
    {id: 2,name: 'Macbook', description: 'Apple Macbook.', price: '$1200',image: 'https://www.cnet.com/a/img/resize/8ac23b08c4b7cb7645aec9fdcf026af94e6b7159/hub/2015/04/07/b35f1174-696c-4d25-8a4f-fa16a2842338/macbook-air-gold-2015-16.jpg?auto=webp&width=768'},
    {id: 3,name: 'Surface Pro 9', description: 'Microsoft Surface Pro 9.', price: '$1289',image: 'https://i.pcmag.com/imagery/reviews/04oXeqT4MuFbMo7fc7QSrAx-2..v1680110421.jpg'},
];

const Products = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifycontent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;