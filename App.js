import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="white-content" backgroundColor="white"/>
      <View style={styles.container}>
        <View style = {styles.card}>
          <Text style = {styles.titulo}>VAI CORINTHIANS!</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    borderColor: '#fff',
    borderWidth: 7,
    margin: 3
  },
  titulo: {
    fontSize: 32,
    color: 'black'
  },
  card:{
      height: 43,
      width: 300,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: 10,
  },
});
