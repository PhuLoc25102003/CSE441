import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  import axios from 'axios';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  export default function UpdateService({ navigation }) {
    const [serviceName, setServiceName] = useState('');
    const [price, setPrice] = useState('');
    const [authToken, setAuthToken] = useState('');
  
    useEffect(() => {
      const fetchAuthToken = async () => {
        try {
          const token = await AsyncStorage.getItem('authToken');
          if (token) {
            setAuthToken(token);
          } else {
            Alert.alert('Authentication Error', 'No authentication token found.');
            navigation.navigate('Login'); // Navigate to login if token is missing
          }
        } catch (error) {
          console.error('Error fetching auth token:', error);
        }
      };
      fetchAuthToken();
    }, []);
  
    const postData = async () => {
      try {
        const newData = {
          name: serviceName,
          price: price,
        };
  
        const response = await axios.post(API_URL, newData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
  
        console.log('POST Response:', response.data);
  
        setServiceName('');
        setPrice('');
      } catch (error) {
        console.error('Error posting data:', error);
        Alert.alert('Error', 'Could not add service. Please try again.');
      }
    };
    return (
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Service name*</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Input a service name"></TextInput>
        <Text style={styles.inputTitle}>Price*</Text>
        <TextInput style={styles.textInput}></TextInput>
        <TouchableOpacity style={styles.addButton} onPress={postData}>
          <Text style={styles.textButton}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
    inputTitle: {
      fontWeight: '500',
    },
    textInput: {
      backgroundColor: '#F2F2F7',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    addButton: {
      backgroundColor: '#EF506B',
      padding: 10,
      borderRadius: 5,
    },
    textButton: {
      color: 'white',
      textAlign: 'center',
      fontWeight: '500',
    },
  });
  