import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductDetailScreen = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>mmd {id}</Text>
        </View>
    );
};

export default ProductDetailScreen;
