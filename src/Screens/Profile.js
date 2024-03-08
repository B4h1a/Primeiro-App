import { StyleSheet, View} from 'react-native';
import Foto2 from "../assets/Foto2.jpg";
import Foto1 from "../assets/Foto1.jpg";
import InfoProfile from '../componets/InfoProfile';
import MyPosts from '../componets/MyPosts';
import Post from '../componets/Post';

export default function Profile() {
  return (
    <View style={styles.container}>
        <InfoProfile
        image={Foto2} 
        publi={100} 
        followers={1230}
        following={5}
        description="Eae fi Bao?"/>
        <MyPosts 
        image={Foto2}/>
        <Post 
        image={Foto1}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:35,
  },
});
