import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";

const ProductDetailScreen = () => {
    const { id } = useLocalSearchParams();

    const foundProduct = products.find((item) => item.id.toString() === id);

    if (!foundProduct) {
        return <Text>Product Not Found</Text>;
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: foundProduct.name }} />
            <Image
                resizeMode="contain"
                source={{ uri: foundProduct.image || defaultPizzaImage }}
                style={styles.image}
            />
            <Text style={styles.price}>{foundProduct?.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 10,
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
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default ProductDetailScreen;
