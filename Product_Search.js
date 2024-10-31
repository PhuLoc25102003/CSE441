import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from './Q3Style';

const Product_Search = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const fetchData = () => {
        if (value === '') {
            console.warn('Please enter a product title.');
            return;
        }
        let filePath = 'https://dummyjson.com/products/search?q=' + value;

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
    };

    return (
        <View>
            <Text style={styles.head}>Search Products</Text>
            <TextInput
                accessibilityLabel="input"
                placeholder="Enter title"
                onChangeText={text => setValue(text)}
                value={value}
            />
            <Button
                style={styles.button}
                title="Search"
                color="#2296F3"
                onPress={fetchData}
            />
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
                    </Card>
                    )}
                />
            </View>
        </View>
    );
};

export default Product_Search;
