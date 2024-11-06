import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        alignItems: 'flex-start', 
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    icon: {
        marginRight: 15,
        marginTop: 4, 
    },
    textContainer: {
        flexDirection: 'column',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2, 
    },
    subtitle: {
        color: '#4169e1',
        fontSize: 14,
    },
});

export default DetailListItem;