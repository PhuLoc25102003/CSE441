import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContactThumbnail from './ContactThum';
import { FlatList } from 'react-native-gesture-handler';

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
    const { contacts } = useSelector((state) => state);
    const renderFavoriteThumbnail = ({ item }) => {
        const { avatar } = item;
        return (
            <ContactThumbnail
                avatar={avatar}
                onPress={() => navigation.navigate('ProfileContact', { contact: item })}
            />
        );
    };
    const favorites = contacts.filter((contact) => contact.favorite);

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={keyExtractor}
                numColumns={3}
                contentContainerStyle={styles.List}
                renderItem={renderFavoriteThumbnail}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: 'center',
        flex: 1
    },
    list: {
        alignItems: 'center',
    },
});

export default Favorites;