import { BaseProduct } from './types';

export type CartItem<T> = {
    product: T;
    quantity: number;
};

// adding a product to the cart
export const addToCart = <T extends BaseProduct>(
    cart: CartItem<T>[],
    product: T,
    quantity: number
): CartItem<T>[] => {
    return [...cart, { product, quantity }];
};

// calculation of the total cost
export const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};