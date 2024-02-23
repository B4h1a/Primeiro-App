import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Foto1 from "../../assets/Foto1.jpg";
import Foto2 from "../../assets/Foto2.jpg";

export default function Stories() {
    return(
        <ScrollView 
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity>
        <Image source={Foto1} style={styles.story}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto2} style={styles.story}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto1} style={styles.story}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto2} style={styles.story}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto1} style={styles.story}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto2} style={styles.story}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto1} style={styles.story }/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Foto2} style={styles.story}/>
        </TouchableOpacity>
     </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
      gap:8,
      height:100,
    },
    story:{width: 100, height: 100, borderRadius:50}
  });