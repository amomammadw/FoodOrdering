import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, Text, View } from "react-native";
import { useCart } from "./providers/CartProvider";
import CartListItem from "../components/CartListItem";

const CartScreen = () => {
    const { items } = useCart();

    return (
        <View>
            <FlatList data={items} renderItem={({ item }) => <CartListItem key={item.id} cartItem={item} />} />
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
};

export default CartScreen;