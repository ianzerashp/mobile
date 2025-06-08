import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import TabNavigator from './src/corinthians/TabNavigator';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}