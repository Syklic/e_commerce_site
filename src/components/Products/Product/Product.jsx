import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterbottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>
                    <Typography variant='body2' color='textsecondary'>{product.decription}</Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add To Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Product