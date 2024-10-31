import { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import styles from "./Q4Style";

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
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Cover source={{ uri: item.thumbnail }} style={styles.image} />
                        <Card.Content>
                            <Title>{item.title}</Title>
                            <Paragraph>Price: ${item.price}</Paragraph>
                            <Paragraph>Discount: {item.discountPercentage}%</Paragraph>
                            <Paragraph>Rating: {item.rating} stars</Paragraph>
                            <Paragraph>Stock: {item.stock} units</Paragraph>
                            <Paragraph>Brand: {item.brand}</Paragraph>
                            <Paragraph>Category: {item.category}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button  onPress={() => console.log('Buy now pressed')}>Delete</Button>
                            <Button  onPress={() => console.log('Add to Cart pressed')}>Cancel</Button>
                        </Card.Actions>
                    </Card>
                )}
            />
        </View>
    );
};
export default Products;