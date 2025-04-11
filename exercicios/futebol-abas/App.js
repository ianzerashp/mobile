import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from "react-native-paper"
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import JogadoresScreen from './screens/JogadoresScreen';
import EscudoScreen from './screens/EscudoScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <PaperProvider>

      <NavigationContainer>

        <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000000',
          },
        }}>

          <Tab.Screen
            name='EscudoScreen'
            component={EscudoScreen}
            options={{
              title: 'O Escudo mais bonito do mundo',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#000000'
              },
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
              },
              tabBarInactiveBackgroundColor: '#dedede',
              tabBarActiveTintColor: '#ffffff',


              tabBarIcon: ({ color, size }) => <Ionicons name='shield' color={color} size={size} />

            }}
          />

          <Tab.Screen
            name='JogadoresScreen'
            component={JogadoresScreen}
            options={{
              title: 'Jogadores',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#000000'
              },
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
              },
              tabBarInactiveBackgroundColor: '#dedede',
              tabBarActiveTintColor: '#ffffff',


              tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
            
            }}
          />

          <Tab.Screen
            name='TitulosScreen'
            component={TitulosScreen}
            options={{
              title: 'Títulos',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#000000'
              },
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
              },
              tabBarInactiveBackgroundColor: '#dedede', 
              tabBarActiveTintColor: '#ffffff', 


              tabBarIcon: ({ color, size }) => <Ionicons name='trophy' color={color} size={size} />
          
            }}
          />

          

        </Tab.Navigator>

      </NavigationContainer>

    </PaperProvider>
  );
}