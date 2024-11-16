import { SafeAreaView, StyleSheet, View, Alert, Text} from 'react-native';

import Home from './src/Home';
import AddService from './src/AddService';
import UpdateService from './src/UpdateService';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { MenuProvider } from 'react-native-popup-menu';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import axios from 'axios';
import ServiceDetail from './src/ServiceDetail';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const API_URL = 'https://kami-backend-5rs0.onrender.com/services';
const deleteData = async (item, navigation) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) {
      Alert.alert('Error', 'No authentication token found.');
      return;
    }
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete the service: ${item.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const response = await axios.delete(`${API_URL}/${item._id}`, {
                headers: { Authorization: `Bearer ${token}` },
              });
              console.log('Delete Response:', response.data);
              Alert.alert('Success', 'Service deleted successfully');
              navigation.goBack(); // Go back after delete
            } catch (error) {
              console.error('Delete error:', error);
              Alert.alert('Error', 'Failed to delete service');
            }
          },
        },
      ]
    );
  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', 'An unexpected error occurred');
  }
};

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <View>
              <Ionicons
                name="person-circle"
                size={30}
                color="black"
                style={{ marginRight: 10 }}
              />
            </View>
          ),
          title: 'HUYỀN TRINH',
        }}
      />
      <Stack.Screen name="Service" component={AddService} />
      <Stack.Screen name="Service" component={UpdateService} />

      <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <Menu>
              <MenuTrigger>
                <SimpleLineIcons
                  name="options-vertical"
                  size={24}
                  color="black"
                />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption
                  onSelect={() => deleteData(route.params, navigation)}>
                  <Text>Delete Service</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          ),
          title: 'ServiceDetail',
        })}
      />
    </Stack.Navigator>
  );
}

function MyTab() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={HomeStack}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Customer"
        component={HomeStack}
        options={{
          tabBarLabel: 'Customer',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={HomeStack}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <MenuProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Home}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="MyTab"
              component={MyTab}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </MenuProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
