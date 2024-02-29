
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Foto1 from "../../assets/Foto1.jpg";
import Foto2 from "../../assets/Foto2.jpg";
import Story from "../Story";

export default function Stories() {
    return(
        <ScrollView 
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          <Story image={Foto1} />
          <Story image={Foto2} />
          <Story image={Foto1} />
          <Story image={Foto2} />
          <Story image={Foto1} />
          <Story image={Foto2} />
          <Story image={Foto1} />
     </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
      gap:8,
      height:100,
    },
  });