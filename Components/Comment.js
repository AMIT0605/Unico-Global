import React from "react";
import { View, StyleSheet,ScrollView, Image, Text,Button, TouchableOpacity,TextInput} from "react-native";



const Comment=()=>{
    const [text, onChangeText] = React.useState("Useless Text");
    return(
      
        <>
        <View style={{width:400,height:875,backgroundColor:"white",position:"absolute"}}/>
<Text style={{fontSize:25,fontWeight:"600",position:"absolute",top:24,left:25,width:340}}>Add your comment</Text>
<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Text}
     />       
      <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/gDc0Kb3/tCo7L.png",
        }}
        style={{width:390,height:300,position:"absolute",top:180,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}
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
export default Comment;