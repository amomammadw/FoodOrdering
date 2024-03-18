import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, Text, View } from "react-native";
import { useCart } from "./providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const CartScreen = () => {
    const { items, total } = useCart();

    return (
        <View style={{ padding: 10 }}>
            <FlatList data={items} renderItem={({ item }) => <CartListItem key={item.id} cartItem={item} />} />
            <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>Total: ${total}</Text>
            <Button text="Checkout" />
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
};

export default CartScreen;
