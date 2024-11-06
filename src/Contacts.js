import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsSuccess } from "./Store";
import { FlatList, StyleSheet, View } from "react-native";
import ContactListItem from "./ContactListItem"; // Ensure you import this

const keyExtractor = ({ phone }) => phone;

const mapContacts = (item) => ({
    name: `${item.name.title} ${item.name.first} ${item.name.last}`,
    avatar: item.picture.thumbnail,
    phone: item.phone
});

const fetchContacts = async () => {
    const data = await fetch('https://randomuser.me/api/?results=50')
    const ContactData = await data.json();
    //console.log("aaa"+ContactData);
    return ContactData.results.map(mapContacts);
    
    
};

const Contacts = ({ navigation }) => {
    const { contacts } = useSelector((state) => state.contacts); // Ensure state.contacts
    const dispatch = useDispatch();

    useEffect(() => {
        fetchContacts()
            .then(contactsaa => {
                dispatch(fetchContactsSuccess(contactsaa));
            })
            .catch(e => {
                console.error(e); // Log the error
            });
    }, []);

    const renderContacts = ({ item }) => {
        const { name, avatar, phone } = item;
        return (
            <ContactListItem
                name={name}
                avatar={avatar}
                phone={phone}
                onPress={() => navigation.navigate("ProfileContact", { contacts: item })}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={keyExtractor}
                renderItem={renderContacts}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    }
});

export default Contacts;
