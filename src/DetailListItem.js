import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or another icon set you prefer

const DetailListItem = ({ icon, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={24} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Align text at the start of the icon
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    icon: {
        marginRight: 15,
        marginTop: 4, // Align the icon with the title text
    },
    textContainer: {
        flexDirection: 'column',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2, // Space between title and subtitle
    },
    subtitle: {
        color: '#4169e1', // Blue color for the subtitle (like in the image)
        fontSize: 14,
    },
});

export default DetailListItem;