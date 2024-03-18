import type { CartItem, Product } from "@/src/types";
import { randomUUID } from "expo-crypto";
import { type PropsWithChildren, createContext, useContext, useState } from "react";

type TCart = {
    items: CartItem[];
    addItem: (product: Product, size: CartItem["size"]) => void;
    updateQuantity: (itemId: string, amount: -1 | 1) => void;
    total: number;
};

const CartContext = createContext<TCart>({
    items: [],
    addItem: () => {},
    updateQuantity: () => {},
    total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem["size"]) => {
        // TODO: if already in cart, increment quantity
        const newItem: CartItem = {
            product,
            size,
            quantity: 1,
            product_id: product.id,
            id: randomUUID(),
        };

        setItems([newItem, ...items]);
    };

    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        const updatedItems = items
            .map((item) => (item.id !== itemId ? item : { ...item, quantity: item.quantity + amount }))
            .filter((item) => item.quantity > 0);
        setItems(updatedItems);
    };

    const total = items.reduce((sum, item) => (sum += item.product.price * item.quantity), 0);

    return <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
