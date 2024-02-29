import {Image, StyleSheet,Text, View} from 'react-native';


export default function InfoProfile({image,publi,followers,following,description}){
    return(
        <View>
        <Image source={image} style={styles.story}/>
        <View>
            <Text style={styles.publi}>{publi}</Text>
            <Text style={styles.followers}>{followers}</Text>
            <Text style={styles.following}>{following}</Text>

            <Text style={styles.publi2}>Publicações</Text>
            <Text style={styles.followers2}>Seguidores</Text>
            <Text style={styles.following2}>Seguindo</Text>
            <Text style={styles.nome}>Victor Bahia</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
        </View>

    );
}
const styles= StyleSheet.create({
    story:{
        width: 100, 
        height: 100, 
        borderRadius:50
    }, 
    publi:{
        fontSize:20,
        width:110,
        height:100,
        marginHorizontal:140,
        marginVertical:-60
    },
    followers:{
        fontSize:20,
        width:110,
        height:100,
        marginHorizontal:225,
        marginVertical:-40
    },
    following:{
        fontSize:20,
        width:110,
        height:100,
        marginHorizontal:330,
        marginVertical:-60
    },
    publi2:{
        width:105,
        height:100,
        marginHorizontal:115,
        marginVertical:-20,
    },
    followers2:{
        width:75,
        height:100,
        marginHorizontal:215,
        marginVertical:-78,
    },
    following2:{
        width:70,
        height:100,
        marginHorizontal:305,
        marginVertical:-20,

    },
    nome:{
        fontSize:20,
        marginVertical:-35,
    },
    description:{
        marginVertical:35,
        fontSize:20
    }
});