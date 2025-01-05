// prod1
import prod1white from '../assets/images/prod-1.jpeg';
import prod1black from '../assets/images/prod-1black.jpeg';
// prod2
import prod2white from '../assets/images/prod2_white.jpeg';
import prod2black from '../assets/images/prod2_black.jpeg';
// prod3
import prod3brown from '../assets/images/prod3-brown.jpeg';
import prod3black from '../assets/images/prod3-black.jpeg';
import prod3beige from '../assets/images/prod3-beige.jpeg';
import prod3red from '../assets/images/prod3-red.jpeg';
// prod4
import prod4white from '../assets/images/prod-4-white.jpeg';
import prod4black from '../assets/images/prod-4 black.jpeg';
const products = [
    {
        id: 1,
        imageUrls: [prod1white, prod1black],
        discountVal: 30,
        productTitle: 'Nike Air Force Ones',
        productBrand: 'Nike',
        productPrice: '$80.00',
        colors: ['white', 'black'],
        type: 'sneakers'
    },
    {
        id: 2,
        imageUrls: [prod2white, prod2black],
        discountVal: 30,
        productTitle: 'Converse Chuck Taylor All Stars High Tops',
        productBrand: 'Converse',
        productPrice: '$100.00',
        colors: ['white', 'black'],
        type: 'sneakers'
    },
    {
        id: 3,
        imageUrls: [prod3brown, prod3black, prod3beige, prod3red],
        discountVal: 30,
        productTitle: 'Timberland Mens Combat Boots',
        productBrand: 'Timberland',
        productPrice: '$200.00',
        colors: ['#A66E38', 'black', '#FFF0DC', '#AF1740'],
        type: 'sneakers'
    },
    {
        id: 4,
        imageUrls: [prod4white, prod4black],
        discountVal: 30,
        productTitle: 'Adidas Mens Sneakers',
        productBrand: 'Adidas',
        productPrice: '$80.00',
        colors: ['white', 'black'],
        type: 'sneakers'
    },
]

export default products