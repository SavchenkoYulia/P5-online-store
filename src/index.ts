import { addToCart, calculateTotal, CartItem } from "./cart";
import { filterByPrice, findProduct } from "./product";
import { Book, Clothing, Electronics } from "./types";

const electronics: Electronics[] = [
    {
        id: 1,
        name: "Smartphone",
        category: 'electronics',
        warranty: "12month",
        price: 5800,
        available: true,
        count: 10,
        description: "Premium smartphone featuring an advanced, high-speed processor.",
        title: "Raval Т8"
    },
    {
    id: 2,
    name: "UltraBook",
    category: 'electronics',
    warranty: "18 months",
    price: 2200,
    available: true,
    count: 8,
    description: "A thin, high-performance laptop for professionals on the go.",
    title: "Dell XPS 13",
	},
	{
    id: 3,
    name: "Smart Fitness Watch",
    category: 'electronics',
    warranty: "18 months",
    price: 1500,
    available: false,
    count: 0,
    description: "Smartwatch with advanced fitness tracking and health monitoring.",
    title: "Garmin Forerunner 945",
},
{
    id: 4,
    name: "SmartPad",
    category: 'electronics',
    price: 550,
    warranty: "18 months",
    available: true,
    count: 6,
    description: "10.5-inch tablet featuring an ultra-responsive touchscreen and powerful processor.",
    title: "Samsung Galaxy Tab S7",
},
{
    id: 5,
    name: "Wireless Speaker",
    category: 'electronics',
    warranty: "18 months",
    price: 3500,
    available: true,
    count: 25,
    description: "High-fidelity portable speaker with exceptional sound quality and deep bass.",
    title: "Bose SoundLink Revolve+",
}

];

const clothing: Clothing[] = [
    {
    id: 1,
    name: "V-Neck T-Shirt",
    price: 25,
    available: true,
    count: 60,
    description: "Soft, breathable cotton T-shirt with a stylish V-neck design.",
    title: "Urban V-Neck Tee",
    category: "clothing",
    size: "M",
},
{
    id: 2,
    name: "Slim Fit Jeans",
    price: 55,
    available: true,
    count: 40,
    description: "Slim-fit jeans with a modern look and comfortable stretch.",
    title: "Slim Fit Denim",
    category: "clothing",
    size: "L",
},
{
    id: 3,
    name: "Windbreaker Jacket",
    price: 95,
    available: false,
    count: 0,
    description: "Lightweight, water-resistant jacket perfect for outdoor activities.",
    title: "Nike Windbreaker",
    category: "clothing",
    size: "XL",
},
{
    id: 4,
    name: "Cashmere Sweater",
    price: 100,
    available: true,
    count: 15,
    description: "Luxuriously soft cashmere sweater for warmth and style.",
    title: "Pure Cashmere Sweater",
    category: "clothing",
    size: "S",
},
{
    id: 5,
    name: "Maxi Dress",
    price: 120,
    available: true,
    count: 12,
    description: "Elegant maxi dress for evening parties and formal gatherings.",
    title: "Sophisticated Evening Maxi",
    category: "clothing",
    size: "M",
}
];


const books: Book[] = [
    {
    id: 1,
    name: "Educated",
    price: 20,
    available: true,
    count: 50,
    description: "A memoir of a woman’s struggle for education in a strict, isolated family.",
    title: "Tara Westover's Journey of Self-Learning",
    category: "book",
    author: "Tara Westover",
    genre: "Memoir",
    pagesCount: 352
},
{
    id: 2,
    name: "Brave New World",
    price: 14,
    available: true,
    count: 40,
    description: "A dystopian novel exploring the consequences of a highly controlled society.",
    title: "Aldous Huxley's Vision of the Future",
    category: "book",
    author: "Aldous Huxley",
    genre: "Dystopian",
    pagesCount: 311
},
{
    id: 3,
    name: "Pride and Prejudice",
    price: 12,
    available: false,
    count: 0,
    description: "A classic romance novel set in the Regency era of England.",
    title: "Jane Austen's Timeless Romance",
    category: "book",
    author: "Jane Austen",
    genre: "Romance",
    pagesCount: 279
},
{
    id: 4,
    name: "Sapiens: A Brief History of Humankind",
    price: 22,
    available: true,
    count: 30,
    description: "A thought-provoking look at the history of humanity and its future potential.",
    title: "Yuval Noah Harari's Exploration of Humanity",
    category: "book",
    author: "Yuval Noah Harari",
    genre: "Non-fiction",
    pagesCount: 443
},
{
    id: 5,
    name: "The Catcher in the Rye",
    price: 18,
    available: true,
    count: 35,
    description: "A novel about teenage rebellion, alienation, and the struggles of growing up.",
    title: "J.D. Salinger's Classic Coming-of-Age Story",
    category: "book",
    author: "J.D. Salinger",
    genre: "Fiction",
    pagesCount: 277
}
];

const foundProduct = findProduct(electronics, 2);
console.log("Product found:", foundProduct);

// Filter products by price
const affordableElectronics = filterByPrice(electronics, 2500);
console.log("Electronics up to 2500:", affordableElectronics);

// Working with the basket
let cart: CartItem<Electronics | Clothing | Book>[] = [];
cart = addToCart(cart, electronics[0], 1);
cart = addToCart(cart, clothing[1], 2);
cart = addToCart(cart, books[2], 1);

console.log("Basket:", cart);
console.log("The total cost of the basket:", calculateTotal(cart));