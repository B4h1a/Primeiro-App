
import { StyleSheet, View } from 'react-native';
import Header from "./src/componets/Header";
import Stories from "./src/componets/Stories";

export default function App() {
  return (
    <View style={styles.container}>
     <Header/>
     <Stories/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 35,
  },
});