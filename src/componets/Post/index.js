import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Entypo, Feather} from '@expo/vector-icons';

export default function Post({profileImage, postImage, profileName, description}) {
    return (
      <ScrollView>
        <View style={styles.nome}>
            <View style={styles.perfil}>
                <TouchableOpacity>
                <Image source={profileImage} style={styles.tela2}/>
                </TouchableOpacity>
                <Text style={styles.name}>{profileName}</Text>
            </View>
            <View style={styles.ponto}>
                <Feather name="more-vertical" size={24} color="black" />
            </View>
        </View>
        <View style={styles.fotinha}>
            <Image source={postImage} style={styles.foto}/>
        </View>
        <View style={styles.icons}>
            <View style={styles.icones}>
                <Entypo name="heart-outlined" size={24} color="black" />
                <Feather name="message-circle" size={24} color="black" />
                <Entypo name="paper-plane" size={24} color="black" />
            </View>
            <View >
                <Entypo name="bookmark" size={24} color="black" />
            </View>
        </View>
        <View style={styles.texto}>
            <Text>{description}</Text>
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    tela2:{
        width: 70,
        height: 70, 
        borderRadius:50,
},
perfil: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
},
    nome:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
},

    fotinha:{
    padding:10,
    borderRadius: 5,
},
    foto:{
        width:"100%",
        height:400,
},
icons:{
    display:'flex',
    flexDirection:'row',
    marginHorizontal:10,
    justifyContent:'space-between',
},
icones:{
    display:'flex',
    flexDirection:'row',
},
texto:{
    padding:10,
    textAlign:'justify',
},
});
