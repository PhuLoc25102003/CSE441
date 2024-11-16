import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function Home({ navigation }) {
 const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://kami-backend-5rs0.onrender.com/services');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const ContactData = await response.json();
      setData(ContactData);
    } catch (e) {
      setError('Failed to load data. Please try again later.');
      console.error('Error fetching data:', e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 return (
    <ScrollView style={styles.container}>
      <View style={styles.titleList}>
        <Text style={styles.text}>Danh sách dịch vụ</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Service')}
        >
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

      <FlatList
        data={data}
        keyExtractor={(item) => (item._id ? item._id.toString() : Math.random().toString())}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ServiceDetail', { item })}
          >
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  titleList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontWeight: '500',
  },
  textButton: {
    color: 'white',
    fontWeight: '800',
    fontSize: 15,
  },
  addButton: {
    alignItems: 'center',
    alignContent: 'center',
    width: 25,
    height: 25,
    borderRadius: '50%',
    backgroundColor: '#EF506B',
  },
  item: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
