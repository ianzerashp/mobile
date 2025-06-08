import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CorinthiansStack from './CorinthiansStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import Sobre from './Sobre';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Jogadores') {
                        iconName = 'account-group';
                    } else if (route.name === 'Jogos') {
                        iconName = 'soccer';
                    } else if (route.name === 'Títulos') {
                        iconName = 'trophy';
                    } else if (route.name === 'Dashboard') {
                        iconName = 'view-dashboard';
                    } else if (route.name === 'Sobre') {
                        iconName = 'information';
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarStyle: {
                    backgroundColor: '#000',
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#fff',
            })}
        >
            <Tab.Screen
                name="Jogadores"
                component={CorinthiansStack}
                initialParams={{ screen: 'JogadorLista' }}
            />
            <Tab.Screen
                name="Jogos"
                component={CorinthiansStack}
                initialParams={{ screen: 'JogoLista' }}
            />
            <Tab.Screen
                name="Títulos"
                component={CorinthiansStack}
                initialParams={{ screen: 'TituloLista' }}
            />
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
            />
            <Tab.Screen
                name="Sobre"
                component={Sobre}
            />
        </Tab.Navigator>
    );
}