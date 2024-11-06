import 'react-native-gesture-handler';
import Contacts from './src/Contacts';
import Store from './src/Store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from './src/Favorites';
import ProfileContact from './src/ProfileContact';

const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName='Contacts'
      screenOptions={
        {
          headerShown: true
        }
      }
    >
      <Stack.Screen name='Contacts' component={Contacts}
        options={{ title: "Contacts" }} />

      <Stack.Screen name='ProfileContact' component={ProfileContact}
        options={{ title: "Profile contact" }} />

    </Stack.Navigator>
  )
}

function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={
        {
          headerShown: true
        }
      }
    >
      <Stack.Screen name='Favorites' component={Favorites}
        options={{ title: "Favorites" }} />

      <Stack.Screen
        name='ProfileContact'
        component={ProfileContact}
        options={{ title: "Profile contact" }}
      />

    </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='ContactsScreens'
      barStyle={{ backgroundColor: "blue" }}
      labeled={false}
      activeColor='#D3D3D3'
      inactiveColor='#A9A9A9'
    >
      <Tab.Screen name='Contacts' component={ContactsScreens}
        options={{
          tabBarIcon: 'format-list-bulleted'
        }}
      />

      <Tab.Screen name='Favorites' component={FavoriteScreens}
        options={{
          tabBarIcon: 'star-check',
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  )
}
export default App;
