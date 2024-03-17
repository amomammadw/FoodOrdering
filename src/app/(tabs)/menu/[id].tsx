import products from "@/assets/data/products";
import Button from "@/src/components/Button";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
    const { id } = useLocalSearchParams();

    const [selectedSize, setSelectedSize] = useState("M");

    const foundProduct = products.find((item) => item.id.toString() === id);

    const addToCart = () => {
        console.warn("MMD", selectedSize);
    };

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

            <Text>Select Size</Text>

            <View style={styles.sizes}>
                {sizes.map((item, index) => {
                    return (
                        <Pressable
                            key={index}
                            style={[styles.size, { backgroundColor: selectedSize === item ? "gainsboro" : "white" }]}
                            onPress={() => setSelectedSize(item)}
                        >
                            <Text style={[styles.sizeText, { color: selectedSize === item ? "black" : "gray" }]}>
                                {item}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>

            <Text style={styles.price}>${foundProduct?.price}</Text>

            <Button text="Add to Cart" onPress={addToCart} />
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
        marginTop: "auto",
    },
    sizes: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
    },
    size: {
        backgroundColor: "gainsboro",
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    sizeText: {
        fontSize: 20,
        fontWeight: "500",
    },
});

export default ProductDetailScreen;
