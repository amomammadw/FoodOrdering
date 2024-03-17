import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "@/src/types";
import Colors from "../constants/Colors";
import { Link } from "expo-router";

interface IProductListItemProps {
    product: Product;
}

export const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export const ProductListItem = ({ product }: IProductListItemProps) => {
    return (
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image resizeMode="contain" source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        maxWidth: "50%",
        borderRadius: 20,
        backgroundColor: "white",
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: "bold",
    },
});
