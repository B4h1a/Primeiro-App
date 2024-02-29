import { StyleSheet, View} from 'react-native';
import Foto2 from "../teste/src/assets/Foto2.jpg";
import InfoProfile from './src/componets/InfoProfile';

export default function App() {
  return (
    <View style={styles.container}>
        <InfoProfile
        image={Foto2} 
        publi={100} 
        followers={1230}
        following={5}
        description="Eae fi Bao?"/>
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
