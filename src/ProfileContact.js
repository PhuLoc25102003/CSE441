import ContactThum from './ContactThum';
import { IconButton } from 'react-native-paper';
import DetailListItem from './DetailListItem';
import { StyleSheet } from 'react-native';

const ProfileContact = ({route}) => {
    const contact = route.params.contact;
    const {id, avatar, name, email, phone, cell, favorite} = contact;
    
    return (
        <View style = {StyleSheet.container}>
            <View style = {styles.avatarSection}>
                <ContactThum avatar ={avatar} name ={name} phone = {phone}/>
            </View>
            <View style = {styles.detailsSection}>
                <DetailListItem icon ="mail" title = "Email" subtitle ={email}/>
                <DetailListItem icon ="Phone" title = "Work" subtitle ={phone}/>
                <DetailListItem icon ="smartphone" title = "Personal" subtitle ={cell}/>
                
                <View style = {{alignItems: 'center'}}>
                    <IconButton
                    icon={favorite==true? "star-check" : "star-check-outline"}
                    iconColor='#663399'

                    size = {20}
                    onPress = {() => {
                    }}
                    />

                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default ProfileContact;
