import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#cccccc',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#ffffff',
            tabBarStyle: { backgroundColor: '#000000' },
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Mega Sena') {
                iconName = 'numeric-6-box-multiple';
              } else if (route.name === 'Jogo do Bicho') {
                iconName = 'paw';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Mega Sena" component={MegaSenaScreen} />
          <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
