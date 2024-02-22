import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Logo from "../teste/src/assets/instagram.png";
import Foto1 from "../teste/src/assets/Foto1.jpg";
import Foto2 from "../teste/src/assets/Foto2.jpg";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Header from "./src/componets/Header";

export default function App() {
  return (
    
    <View style={styles.container}>
     <Header/>
      <View style={styles.fotos}>
        <ScrollView 
        contentContainerStyle={{ height:100 ,gap:8}}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity>
        <Image source={Foto1} style={{ width: 100, height: 100, borderRadius:50 }}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto2} style={{width:100, height:100, borderRadius:50}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto1} style={{ width: 100, height: 100, borderRadius:50 }}/>
        </TouchableOpacity>
        <Image source={Foto2} style={{width:100, height:100, borderRadius:50}}/>
        <TouchableOpacity>
        <Image source={Foto1} style={{ width: 100, height: 100, borderRadius:50 }}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto2} style={{width:100, height:100, borderRadius:50}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto1} style={{ width: 100, height: 100, borderRadius:50 }}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto2} style={{width:100, height:100, borderRadius:50}}/>
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
  fotos: {
    flexDirection: 'row',
    gap: 16,
  }
});
