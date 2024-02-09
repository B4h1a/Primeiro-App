import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Logo from "../teste/assets/instagram.png";
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{ width: 200, height: 60 }} source={Logo} />
        <StatusBar style="auto" />
        <View style={styles.edit}>
          <TouchableOpacity>
            <Entypo name="heart-outlined" size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="location-arrow" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.fotos}>
        <ScrollView 
        contentContainerStyle={{ height:100 ,gap:8}}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://media.istockphoto.com/id/183361475/photo/young-man-portrait.jpg?s=612x612&w=0&k=20&c=rctZMSlUZ0qy7ryLHVWq61LhXNM_iFywn7ksRZke_pQ=" }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        style={{width:100, height:100, borderRadius:50}}
        source={{uri: "https://thumbs.dreamstime.com/z/funny-man-fake-glasses-mustache-30485667.jpg"}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://media.istockphoto.com/id/538665020/pt/foto/internet-meme-why-you-no-rage-face-3d-illustration.jpg?s=612x612&w=0&k=20&c=3QloQYgwnSKJGlaNECxfGBIB248vmFB_2oOtbwPf7gA=" }}
        />
        </TouchableOpacity>
        <Image
        style={{width:100, height:100, borderRadius:50}}
        source={{uri: "https://www.yazigi.com.br/galeria/repositorio/images/noticias/2019/janeiro/melhores-memes-de-2018/1.jpg"}}/>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://t.ctcdn.com.br/rPY6z7TjAZv0oThd7b94my2HtHY=/640x360/smart/i803253.jpeg" }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        style={{width:100, height:100, borderRadius:50}}
        source={{uri: "https://i.kym-cdn.com/photos/images/newsfeed/001/788/217/3b9.png"}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzyLc8LMQIrviNz6u2EP3TtPRZZt3OlhrhHA&usqp=CAU" }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        style={{width:100, height:100, borderRadius:50}}
        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3U74Ys2qOKSIQMImFl3AozjEE5VSgdUELyg&usqp=CAU"}}/>
        </TouchableOpacity>
     </ScrollView>
      </View>

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    flexDirection: 'row',
    padding: 10,
    gap: 5,
  },
  fotos:{
    flexDirection: 'row',
    gap: 16,
  }
});
