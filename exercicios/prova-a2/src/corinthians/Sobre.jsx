import { StyleSheet, View, ScrollView, Linking } from 'react-native';
import { Text, Card, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Sobre() {
    const appVersion = "1.9.1.0";
    const developerName = "Ian Araujo";

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <LinearGradient
                colors={['#000000', '#111111']}
                style={styles.headerGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.headerTitle}>Sobre o App</Text>
                <Text style={styles.headerSubtitle}>Coringão Stats App</Text>
                <Text style={styles.headerVersion}>Versão {appVersion}</Text>
            </LinearGradient>

            <View style={styles.contentContainer}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Text style={styles.cardTitle} variant='titleLarge'>Desenvolvido por:</Text>
                        <Text style={styles.cardParagraph} variant='bodyMedium'>{developerName}</Text>
                        <Text style={styles.cardParagraph} variant='bodyMedium'>Estudante de Análise e Desenvolvimento de Sistemas</Text>
                        
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Text style={styles.cardTitle} variant='titleLarge'>Sobre o Projeto:</Text>
                        <Text style={styles.cardParagraph} variant='bodyMedium'>
                            Aplicativo desenvolvido para a disciplina de "Programação para Dispositivos Móveis". A ideia era 
                            desenvolver um app de "gerenciamento" de clube de futebol, em homenagem ao TODO PODEROSO TIMÃO, que permite 
                            gerenciar informações dos jogadores, jogos e títulos relacionados ao clube.
                        </Text>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Text style={styles.cardTitle} variant='titleLarge'>Tecnologias e Bibliotecas Utilizadas:</Text>
                        <View style={styles.techList}>
                            <Text style={styles.techItem}>• React Native</Text>
                            <Text style={styles.techItem}>• Expo Framework</Text>
                            <Text style={styles.techItem}>• React Navigation</Text>
                            <Text style={styles.techItem}>• React Native Paper</Text>
                            <Text style={styles.techItem}>• AsyncStorage</Text>
                            <Text style={styles.techItem}>• React Native Masked Text</Text>
                            <Text style={styles.techItem}>• Expo Image Picker</Text>
                            <Text style={styles.techItem}>• Expo Linear Gradient</Text>
                            <Text style={styles.techItem}>• React Native Animated Numbers</Text>
                            <Text style={styles.techItem}>• MaterialCommunityIcons (via Expo Vector Icons)</Text>
                        </View>
                    </Card.Content>
                </Card>

                <Text style={styles.footerText}>
                    &copy; 2024 - Todos os direitos reservados.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#000',
        paddingBottom: 20,
    },
    headerGradient: {
        padding: 20,
        paddingTop: 40,
        alignItems: 'center',
        marginBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFD700',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    headerSubtitle: {
        fontSize: 20,
        color: '#fff',
        marginTop: 5,
        opacity: 0.9,
        fontWeight: '600',
    },
    headerVersion: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5,
        opacity: 0.6,
    },
    contentContainer: {
        paddingHorizontal: 15,
    },
    card: {
        backgroundColor: '#1A1A1A',
        marginVertical: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#333',
        elevation: 6,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    cardTitle: {
        color: '#FFD700',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardParagraph: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 22,
        opacity: 0.9,
        marginBottom: 5,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    techList: {
        marginTop: 5,
    },
    techItem: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 3,
        opacity: 0.8,
    },
    footerText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
        opacity: 0.5,
    },
});