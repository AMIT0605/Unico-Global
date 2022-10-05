import React from "react";
import { View, StyleSheet,ScrollView, Image, Text,Button, TouchableOpacity } from "react-native";



const MainScreen=({navigation})=>{
    return(
   
        <>
        <View style={{width:400,height:875,backgroundColor:"black",position:"absolute"}}/>
        <Text style={{fontSize:50,color:"white",position:"absolute",top:450,left:20,fontWeight:"bold",width:200}}>Lorem Ipsum</Text>
        <Text style={{fontSize:14,color:"white",position:"absolute",top:590,left:20,width:380}}>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.Lectus id commodo egestas metus interdum dolor.</Text>
        <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/WD9RTxd/rocket.png",
        }}
        style={styles.image2}
        />
        
        <TouchableOpacity  onPress={ () => navigation.navigate('Login')} style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:50,
       position:"absolute",top:700,left:45,
       backgroundColor:'orange',
       borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10
     }}>
<Text style={{fontWeight:"bold",color:"white"}}>GET STARTED</Text>
        </TouchableOpacity>
        
        </>
    );
}
const styles=StyleSheet.create({

image2:{

  position:"absolute",
  top:100,
  width:350,height:350,
  left:20,
  transform:([{ rotate: "-405deg" }]),
},


});
    export default MainScreen;