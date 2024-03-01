import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {} from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function MyPosts({image}){
    return(
        <View>
            <View style={styles.edit}>
            <TouchableOpacity>
            <MaterialIcons name="grid-on" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialCommunityIcons name="movie-open-play-outline" size={24} color="#aaa" />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialCommunityIcons name="account-outline" size={24} color="#aaa" />
            </TouchableOpacity>
            </View>
            <View style={styles.borda}></View>
            <View>
                <View style={styles.reta}>
            <Image source={image} style={styles.marcha}/>
            <Image source={image} style={styles.marcha}/>
            <Image source={image} style={styles.marcha}/>
                </View>
                <View style={styles.borda2}></View>
                <View style={styles.reta}>
            <Image source={image} style={styles.marcha}/>
            <Image source={image} style={styles.marcha}/>
            <Image source={image} style={styles.marcha}/>
                </View>
                <View style={styles.borda2}></View>
                <View style={styles.reta}>
            <Image source={image} style={styles.marcha}/>
            <Image source={image} style={styles.marcha}/>
            <Image source={image} style={styles.marcha}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    edit:{
        flexDirection: 'row',
        gap: 7,
        justifyContent: 'space-around',
    },
    borda:{
        borderBottomWidth:2,
    },
    marcha:{
        width:130,
        height:130,
    },
    reta:{
        flexDirection:'row',
        gap:7,
    },
    borda2:{
        borderBottomWidth:3,
        borderColor:'#FFFFFF',
    },
  });