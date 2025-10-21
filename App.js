import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActionCards from './componentes/action-cards';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CONVERTER TEXTOS EM FALA</Text>
      <Text style={styles.subtitulo}>Nossa tecnologia transforma texto em fala com vozes realistas e suporte a vários idiomas — ideal para pessoas com baixa visão ou com dificuldades de leitura, além de útil para criar narrações, áudios e facilitar a acessibilidade.</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, gap: 80 }}>
        <ActionCards img={require('./assets/audio.png')} titulo="Leitura em voz alta" texto="Ouça qualquer texto de forma clara e natural." />
        <ActionCards img={require('./assets/multimaior.png')} titulo="Suporte Multilíngue" texto="Converta textos em vários idiomas." />
        <ActionCards img={require('./assets/microfone.png')} titulo="Vozes Naturais" texto="Áudios realistas que soam humanos" />
        <ActionCards img={require('./assets/deficiente.png')} titulo="Acessibilidade
Digital" texto="Inclusão para pessoas com deficiência visual" />


      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    //sobre:
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#053B68',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    gap: 20,
    paddingTop: 80,
    
  },
  titulo: {
    fontSize: 96,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: 'center',
  },
});
