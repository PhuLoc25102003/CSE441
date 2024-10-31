import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Button, Alert} from "react-native";
import styles from "./Q1Style";

const Products = () => {
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products/';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products);


            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });


    return (
        <View><FlatList data={data}
            renderItem={({ item }) => {
                return (
                    <View style={styles.productContainer}>
                        <View style={styles.imageCotainer}>
                            <Image source={{ uri: item.thumbnail }} style={styles.image} />
                        </View>
                        <View style={styles.inforProductContainer}>
                            <Text>Title:{item.title}</Text>
                            <Text>Description: {item.description}</Text>
                            <Text>Price: {item.price}</Text>
                            <Text>Discount: {item.discountPercentage}</Text>
                            <Text>Rating: {item.rating}</Text>
                            <Text>Stock: {item.stock}</Text>
                            <Text>Brand: {item.brand}</Text>
                            <Text>Category: {item.category}</Text>

                            <View style={styles.buttonCotainer}>
                                <Button style={styles.button}
                                    title="Detail"
                                    color="#2296F3"
                                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                                />
                                <Button
                                    style={styles.button}
                                    title="Add"
                                    color="#2296F3"
                                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                                />
                                <Button
                                    style={styles.button}
                                    title="Delete"
                                    color="#2296F3"
                                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                                />
                            </View>
                        </View>


                    </View>
                );
            }} />
        </View>
    );
};
export default Products;