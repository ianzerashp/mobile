import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          {/* Home Screen */}
          <Tab.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            title: 'Início',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange'
            },
            tabBarInactiveBackgroundColor: 'black',
            tabBarActiveTintColor: 'orange',
            tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
          }}
          />

          {/* ProfileScreen */}
          <Tab.Screen 
          name="ProfileScreen" 
          component={ProfileScreen}
          options={{
            title: 'Perfil',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange'
            },
            tabBarInactiveBackgroundColor: 'black',
            tabBarActiveTintColor: 'orange',
            tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
          }} 
          />
          
          {/* ProfileScreen */}
          <Tab.Screen 
          name="SettingsScreen" 
          component={SettingsScreen}
          options={{
            title: 'Configurações',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange'
            },
            tabBarInactiveBackgroundColor: 'black',
            tabBarActiveTintColor: 'orange',
            tabBarIcon: ({ color, size }) => <Ionicons name='settings' color={color} size={size} />
          }} />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}