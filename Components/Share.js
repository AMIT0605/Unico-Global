import React from "react";
import { View, StyleSheet,ScrollView, Image, Text,Button, TouchableOpacity,TextInput} from "react-native";



const Share=()=>{
    const [text, onChangeText] = React.useState("Useless Text");
    return(
      
        <>
<View style={{width:400,height:875,backgroundColor:"#FDFC47",opacity:0.1,position:"absolute"}}/>
<Text style={{fontSize:25,fontWeight:"600",position:"absolute",top:24,left:25,width:340}}>Search Groups</Text>
<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Text}
     />         
     <Text style={{fontSize:16,fontWeight:"600",position:"absolute",top:174,left:80,width:340}}>The Level Up Tribe Group 1</Text>
     <Text style={{fontSize:16,fontWeight:"600",position:"absolute",top:244,left:80,width:340}}>The Level Up Tribe Group 2</Text>
     <Text style={{fontSize:16,fontWeight:"600",position:"absolute",top:314,left:80,width:340}}>The Level Up Tribe Group 3</Text>
     <Text style={{fontSize:16,fontWeight:"600",position:"absolute",top:390,left:80,width:340}}>The Level Up Tribe Group 4</Text>
     <Text style={{fontSize:16,fontWeight:"600",position:"absolute",top:464,left:80,width:340}}>The Level Up Tribe Group 5</Text>
     <Text style={{fontSize:16,fontWeight:"600",position:"absolute",top:534,left:80,width:340}}>The Level Up Tribe Group 6</Text>
     <TouchableOpacity style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:77,
       height:35,
       position:"absolute",top:169,left:305,
       backgroundColor:'orange',
       borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:15,borderBottomRightRadius:15
     }}>
 <Text style={{color:"white"}}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:77,
       height:35,
       position:"absolute",top:236,left:305,
       backgroundColor:'orange',
       borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:15,borderBottomRightRadius:15
     }}>
 <Text style={{color:"white"}}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:77,
       height:35,
       position:"absolute",top:456,left:305,
       backgroundColor:'orange',
       borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:15,borderBottomRightRadius:15
     }}>
 <Text style={{color:"white"}}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:77,
       height:35,
       position:"absolute",top:526,left:305,
       backgroundColor:'orange',
       borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:15,borderBottomRightRadius:15
     }}>
 <Text style={{color:"white"}}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:77,
       height:35,
       position:"absolute",top:386,left:305,
       backgroundColor:'white',
       borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:15,borderBottomRightRadius:15
     }}>
 <Text style={{color:"orange"}}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:77,
       height:35,
       borderWidth:2,
       borderColor:"orange",
       position:"absolute",top:306,left:305,
       backgroundColor:'white',
       borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:15,borderBottomRightRadius:15
     }}>
 <Text style={{color:"black"}}>Undo</Text>
        </TouchableOpacity>
        <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/jbmq5TN/Aesthetic-Anime-Pfp-PNG-Free-File-Download.png",
        }}
        style={{width:60,height:50,position:"absolute",top:160,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
        <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/pvrmnJf/8360b8aaf914d14a44feceff925c2e33.png",
        }}
        style={{width:60,height:50,position:"absolute",top:170,left:14,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/jbmq5TN/Aesthetic-Anime-Pfp-PNG-Free-File-Download.png",
        }}
        style={{width:60,height:50,position:"absolute",top:230,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
        <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/pvrmnJf/8360b8aaf914d14a44feceff925c2e33.png",
        }}
        style={{width:60,height:50,position:"absolute",top:240,left:14,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/jbmq5TN/Aesthetic-Anime-Pfp-PNG-Free-File-Download.png",
        }}
        style={{width:60,height:50,position:"absolute",top:300,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
        <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/pvrmnJf/8360b8aaf914d14a44feceff925c2e33.png",
        }}
        style={{width:60,height:50,position:"absolute",top:310,left:14,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/jbmq5TN/Aesthetic-Anime-Pfp-PNG-Free-File-Download.png",
        }}
        style={{width:60,height:50,position:"absolute",top:380,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
        <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/pvrmnJf/8360b8aaf914d14a44feceff925c2e33.png",
        }}
        style={{width:60,height:50,position:"absolute",top:390,left:14,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/jbmq5TN/Aesthetic-Anime-Pfp-PNG-Free-File-Download.png",
        }}
        style={{width:60,height:50,position:"absolute",top:450,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
        <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/pvrmnJf/8360b8aaf914d14a44feceff925c2e33.png",
        }}
        style={{width:60,height:50,position:"absolute",top:460,left:14,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
         
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/jbmq5TN/Aesthetic-Anime-Pfp-PNG-Free-File-Download.png",
        }}
        style={{width:60,height:50,position:"absolute",top:520,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
        <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/pvrmnJf/8360b8aaf914d14a44feceff925c2e33.png",
        }}
        style={{width:60,height:50,position:"absolute",top:530,left:14,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
        />
       
       
       
       
       
       
       
        </>
    );
}
const styles=StyleSheet.create({

    input: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderColor:"orange",
        width:320,
        position:"absolute",
        top:75,
        left:12,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"white",
        elevation:5,
        
      },


});
export default Share;