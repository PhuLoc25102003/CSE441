import { View, Text, TextInput, Button, Alert } from "react-native";
import styles from "./Q2Style";
import { useState } from "react";


const Product_add = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');

    handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                rating: rating,
                stock: stock,
                brand: brand,
                category: category,
                images: images,
            }),

        })
            .then((res) => res.json())
            .then(console.log);
        Alert.alert("Add successfull")
    };
    
    return (
        <View>
            <Text style={styles.head}>Add a Product</Text>

            <Text style={styles.title} nativeID="titleLabel">Title</Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="titleLabel"
                placeholder="Enter title"
                onChangeText={Text => setTitle(Text)}
            />
            <Text style={styles.title} nativeID="descriptionLabel">Description</Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="descriptionLabel"
                placeholder="Enter description"
                onChangeText={Text => setDescription(Text)}
            />

            <Text style={styles.title} nativeID="priceLabel">Price</Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="priceLabel"
                placeholder="Enter price"
                onChangeText={Text => setPrice(Text)}
            />
    

            <Text style={styles.title} nativeID="discountLabel">Discount Percentage</Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="discountLabel"
                placeholder="Enter discount percentage"
                onChangeText={Text => setDiscountPercentage(Text)}
            />

            <Text style={styles.title} nativeID="ratingLabel">Rating</Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="ratingLabel"
                placeholder="Enter rating"
                onChangeText={Text => setRating(Text)}
            />

            <Text style={styles.title} nativeID="stockLabel">Stock</Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="stockLabel"
                placeholder="Enter stock"
                onChangeText={Text => setStock(Text)}
            />

            <Text style={styles.title} nativeID="brandLabel">Brand</Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="brandLabel"
                placeholder="Enter brand"
                onChangeText={Text => setBrand(Text)}
            />

            <Text style={styles.title} nativeID="categoryLabel">Category</Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="categoryLabel"
                placeholder="Enter category"
                onChangeText={Text => setCategory(Text)}
            />

            <Text style={styles.title} nativeID="imageLabel">Images</Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="imageLabel"
                placeholder="Enter images URL(s)"
                onChangeText={Text => setImages(Text)}
            />
            <Button
                style={styles.button}
                title="Submit"
                color="#2296F3"
                onPress={handleSubmit}
            />
        </View>

    )
};

export default Product_add;
