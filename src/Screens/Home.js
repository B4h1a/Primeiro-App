
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from "../componets/Header";
import Stories from "../componets/Stories";
import Post from '../componets/Post';
import Foto1 from "../assets/Foto1.jpg";
import Foto2 from "../assets/Foto2.jpg";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
     <Header/>
     <Stories/>
     <View style={styles.borda}></View>
     <Post
     profileImage={Foto1}
     postImage={Foto2}
     profileName="Torador"
     description="ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
     />
     <Post
     profileImage={Foto1}
     postImage={Foto2}
     profileName="Torador"
     description="ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
     />
     <Post
     profileImage={Foto1}
     postImage={Foto2}
     profileName="Torador"
     description="ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
     />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop:35,
  },
  borda:{
    borderBottomWidth:2,
},
});