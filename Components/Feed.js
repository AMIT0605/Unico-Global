import React from "react";
import { View, StyleSheet,ScrollView, Image, Text,Button, TouchableOpacity,TextInput, TouchableNativeFeedback } from "react-native";



const Feed=({navigation})=>{
  const [text, onChangeText] = React.useState("Useless Text");
    return(
   
        <>
         <View style={{}}/>
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/Zmz881z/360-F-369198116-K0s-Fy2g-RTo1lm-If5j-VGe-Qma-IEibj-C3-NN.jpg",
        }}
        style={{width:350,height:300,position:"absolute",top:70,left:22,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/68ZxQNj/like.png",
        }}
        style={{width:30,height:30,position:"absolute",top:380,left:22,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/HdbhKtq/share.png",
        }}
        style={{width:30,height:30,position:"absolute",top:380,left:122,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
           <TouchableOpacity  onPress={ () => navigation.navigate('Share')} style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:35,
       height:35,
       position:"absolute",top:376,left:115,
       backgroundColor:'transparent',
       borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10
     }}>
 
        </TouchableOpacity>   
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/3B64nP3/chat-balloon.png",
        }}
        style={{width:30,height:30,position:"absolute",top:380,left:72,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
      <TouchableOpacity  onPress={ () => navigation.navigate('Comments')} style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:35,
       height:35,
       position:"absolute",top:376,left:65,
       backgroundColor:'transparent',
       borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10
     }}>
 
        </TouchableOpacity>   
 <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/qsMRPzJ/save-instagram.png",
        }}
        style={{width:30,height:35,position:"absolute",top:380,left:342,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />

<View style={{width:40,height:40,backgroundColor:"orange",position:"absolute",top:18,left:30,borderTopRightRadius:20,borderTopLeftRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20}}/>
<Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/ZXmvf79/Cute-Boy-Anime-Transparent-PNG.png",
        }}
        style={{width:30,height:35,position:"absolute",top:22,left:35,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
<Text style={{fontSize:20,fontWeight:"600",position:"absolute",top:24,left:85}}>React Native Developer</Text>
<Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/bgLZM38/menu.png",
        }}
        style={{width:30,height:30,position:"absolute",top:25,left:346,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
<Text style={{fontSize:17,position:"absolute",top:425,color:"orange",left:25}}>500 Likes</Text>
<Text style={{fontSize:18,fontWeight:"600",position:"absolute",top:454,left:25,width:340}}>Success is not final; Failure is not fatal; It is the will to continue that counts</Text>
<View style={{width:55,height:55,backgroundColor:"orange",position:"absolute",top:548,left:165,borderTopRightRadius:15,elevation:5,borderTopLeftRadius:15,borderBottomLeftRadius:15,borderBottomRightRadius:15}}/>
<Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/58053fY/plus-1.png",
        }}
        style={{width:30,height:30,position:"absolute",top:560,left:177,borderTopRightRadius:12,elevation:5.1,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
<Text style={{fontSize:13,position:"absolute",top:510,color:"grey",left:25}}>22 September 2022</Text>



        </>
    );
}
const styles=StyleSheet.create({




});

export default Feed;