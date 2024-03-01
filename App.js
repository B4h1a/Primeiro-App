import { StyleSheet, View} from 'react-native';
import Foto2 from "../teste/src/assets/Foto2.jpg";
import Foto1 from "../teste/src/assets/Foto1.jpg";
import InfoProfile from './src/componets/InfoProfile';
import MyPosts from './src/componets/MyPosts';

export default function App() {
  return (
    <View style={styles.container}>
        <InfoProfile
        image={Foto2} 
        publi={100} 
        followers={1230}
        following={5}
        description="Eae fi Bao?"/>
        <MyPosts 
        image={Foto1}/>
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
