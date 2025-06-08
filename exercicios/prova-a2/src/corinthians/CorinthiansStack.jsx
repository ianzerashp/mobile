import { createStackNavigator } from '@react-navigation/stack';
import JogadorLista from './JogadorLista';
import JogadorForm from './JogadorForm';
import JogoLista from './JogoLista';
import JogoForm from './JogoForm';
import TituloForm from './TituloForm';
import TituloLista from './TituloLista';
import Dashboard from './Dashboard';
import JogadorDetalhes from './JogadorDetalhes';
import Sobre from './Sobre';

const Stack = createStackNavigator();

export default function CorinthiansStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    title: "Dashboard",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="JogadorLista"
                component={JogadorLista}
                options={{
                    title: "Lista de Jogadores",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="JogadorForm"
                component={JogadorForm}
                options={{
                    title: "Formulário de Jogador",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="JogadorDetalhes"
                component={JogadorDetalhes}
                options={{
                    title: "Detalhes do Jogador",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="JogoLista"
                component={JogoLista}
                options={{
                    title: "Próximos Jogos",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="JogoForm"
                component={JogoForm}
                options={{
                    title: "Formulário de Jogo",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="TituloLista"
                component={TituloLista}
                options={{
                    title: "Lista de Títulos",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="TituloForm"
                component={TituloForm}
                options={{
                    title: "Formulário de Título",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    title: "Créditos",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    );
}