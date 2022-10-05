import React from "react";
import { View, StyleSheet,ScrollView, Image, Text,Button, TouchableOpacity,TextInput } from "react-native";



const AddFoodForm=({navigation})=>{
  const [text, onChangeText] = React.useState("Useless Text");
    return(
   
        <>
       <View style={{width:400,height:875,backgroundColor:"#FDFC47",opacity:0.3,position:"absolute"}}/>
       <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/WD9RTxd/rocket.png",
        }}
        style={styles.image2}
        />
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/WD9RTxd/rocket.png",
        }}
        style={styles.image3}
        />
        <Text style={{fontSize:14,fontWeight:"600",position:"absolute",opacity:0.8,top:100,left:25}}>Welcome Back</Text>
        <Text style={{fontSize:32,fontWeight:"bold",position:"absolute",opacity:0.8,top:130,left:25}}>Login With</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Text}
        
        
      />
       <TextInput
        style={styles.input1}
        onChangeText={onChangeText}
        value={Text}
        placeholder="******"
        
      />
     <Text style={{fontSize:20,fontWeight:"bold",position:"absolute",top:195,opacity:0.8,left:25}}>Email</Text>
     <Text style={{fontSize:20,fontWeight:"bold",position:"absolute",top:300,opacity:0.8,left:25}}>Password</Text>  
     <Text style={{fontSize:13,fontWeight:"500",position:"absolute",opacity:0.8,top:395,left:240}}>Forgot Password?</Text>
    
        <Text style={{fontSize:13,fontWeight:"500",position:"absolute",color:"blue",opacity:0.8,top:515,left:150}}>Or sign in with</Text>
        <TouchableOpacity  onPress={ () => navigation.navigate('Feeds')}
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:50,
       position:"absolute",top:445,left:43,
       backgroundColor:'orange',
       borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,
     }}
 >
 <Text style={{fontWeight:"bold",color:"white"}}>Login</Text>
  
 </TouchableOpacity>
 <TouchableOpacity 
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:50,
       position:"absolute",top:555,left:43,
       backgroundColor:'transparent',borderWidth:0.4,borderColor:"black",
       borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,
     }}
 >
 <Text style={{fontWeight:"bold",color:"black"}}>Login with Google</Text>
  
 </TouchableOpacity>
 <TouchableOpacity 
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:50,
       position:"absolute",top:620,left:43,
       backgroundColor:'transparent',borderWidth:0.4,borderColor:"black",
       borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,
     }}
 >
 <Text style={{fontWeight:"bold",color:"black"}}>Login with Apple</Text>
  
 </TouchableOpacity>        
 <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/K9qbQHn/search-2.png"
        }}
        style={styles.image4}
        />
      <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/kxwshG4/apple.png"
        }}
        style={styles.image5}
        />  
         <Text style={{color:"black",position:"absolute",top:680,left:70}}>Don't have app name account</Text>
         <TouchableOpacity  onPress={ () => navigation.navigate('Sign Up')} style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:97,
       height:30,
       position:"absolute",top:676,left:240,
       backgroundColor:'transparent',
       borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10
     }}>
 <Text style={{color:"orange"}}>Sign up</Text>
        </TouchableOpacity>
        
         <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/WD9RTxd/rocket.png",
        }}
        style={styles.image6}
        />
           <Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/WD9RTxd/rocket.png",
        }}
        style={styles.image7}
        />







    </>
    );
  }
  const styles=StyleSheet.create({

    image2:{
    
      position:"absolute",
      
      width:60,height:60,
      left:366,
      transform:([{ rotate: "-426deg" }]),
    },
    input: {
      height: 50,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      elevation:5,
      borderColor:"orange",
      width:320,
      position:"absolute",
      top:225,
      left:12,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      backgroundColor:"white",
      
    },
    input1: {
      height: 50,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      borderColor:"orange",
      width:320,
      position:"absolute",
      top:330,
      left:12,
      elevation:5,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      backgroundColor:"white",
      
    },
    image3:{
    
      position:"absolute",
      top:204,
      width:60,height:60,
      left:115,
      transform:([{ rotate: "-380deg" }]),
    },
    image4:{
    
      position:"absolute",
      top:568,
      width:25,height:25,
      left:95,
      
    },
    image5:{
    
      position:"absolute",
      top:628,
      width:30,height:30,
      left:96,
      
    },
    image6:{
    
      position:"absolute",
      top:710,
      width:60,height:60,
      left:15,
      transform:([{ rotate: "295deg" }]),
    },
    image7:{
    
      position:"absolute",
      top:704,
      width:110,height:110,
      left:337.5,
      transform:([{ rotate: "315deg" }]),
    },
    });
export default AddFoodForm;