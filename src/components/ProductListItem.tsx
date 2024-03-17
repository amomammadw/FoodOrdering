import { Image, StyleSheet } from "react-native";
import { Product } from "@/src/types";
import { Text, View } from "@/src/components/Themed";
import Colors from "../constants/Colors";

interface IProductListItemProps {
    product: Product;
}

export const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export const ProductListItem = ({ product }: IProductListItemProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 20,
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
