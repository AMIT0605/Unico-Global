import React from "react";
import { View, StyleSheet,ScrollView, Image, Text,Button, TouchableOpacity,TextInput} from "react-native";



const Signup=()=>{
    const [text, onChangeText] = React.useState("Useless Text");
    return(
      
        <>
        
         <View style={{width:400,height:875,backgroundColor:"#FDFC47",opacity:0.1,position:"absolute"}}/>
        
<Text style={{fontSize:29,color:"blue",fontWeight:"bold",position:"absolute",top:20,left:137}}>Sign Up</Text>
<Text style={{fontSize:20,fontWeight:"bold",position:"absolute",top:115,opacity:0.8,left:25}}>Email</Text>
<Text style={{fontSize:13,fontWeight:"500",position:"absolute",opacity:0.8,top:75,left:100}}>Welcome, looking for service?</Text>
<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Text}
     />
     <Text style={{fontSize:20,fontWeight:"bold",position:"absolute",top:225,opacity:0.8,left:25}}>User Name</Text>
     <TextInput
        style={styles.input1}
        onChangeText={onChangeText}
        value={Text}
        placeholder="Amit"
        
      />
       <TextInput
        style={styles.input2}
        onChangeText={onChangeText}
        value={Text}
        placeholder="I am a content creator"
        
      />

<Text style={{fontSize:20,fontWeight:"bold",position:"absolute",top:335,opacity:0.8,left:25}}>How do you describe yourself?</Text>

<Text style={{fontSize:20,fontWeight:"bold",position:"absolute",top:445,opacity:0.8,left:25}}>Phone Number</Text>
<Text style={{fontSize:20,fontWeight:"bold",position:"absolute",top:550,opacity:0.8,left:25}}>Password</Text>
<TextInput
        style={styles.input3}
        onChangeText={onChangeText}
        value={Text}
        placeholder="03123456789"
        
      />
       <TextInput
        style={styles.input4}
        onChangeText={onChangeText}
        value={Text}
        placeholder="********"
        
      />

<View style={{width:20,height:20,backgroundColor:"orange",position:"absolute",top:658,left:30}}/>
<Image
        resizeMode="contain"
        source={{
          uri:"https://i.ibb.co/Z6F0WwP/tick.png",
        }}
        style={{width:13,height:13,position:"absolute",top:662,left:33}}
        />
<Text style={{fontSize:13,fontWeight:"500",position:"absolute",top:660,left:60}}>I agree to the</Text>
<Text style={{fontSize:13,fontWeight:"500",position:"absolute",top:660,left:140,color:"orange"}}>Terms & Conditions</Text>
<Text style={{fontSize:13,fontWeight:"500",position:"absolute",top:660,left:260}}>and</Text>
<Text style={{fontSize:13,fontWeight:"500",position:"absolute",top:660,left:290,color:"orange"}}>Privacy Policy</Text>
<TouchableOpacity style={{
       
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:50,
       position:"absolute",top:700,left:45,
       backgroundColor:'orange',
       borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10
     }}>
<Text style={{fontWeight:"bold",color:"white"}}>Signup</Text>
        </TouchableOpacity>     
      
      
        
  
      
      
        
      
      
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
        top:145,
        left:12,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"white",
        elevation:5,
        
      },

      input1: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        elevation:5,
        borderColor:"orange",
        width:320,
        position:"absolute",
        top:255,
        left:12,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"white",
        
      },

      input2: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:"black",
        width:320,
        position:"absolute",
        top:365,
        left:12,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"transparent",
        
      },
      input3: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:"black",
        width:320,
        position:"absolute",
        top:475,
        left:12,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"transparent",
        
      },
      input4: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:"black",
        width:320,
        position:"absolute",
        top:580,
        left:12,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"transparent",
        
      },
});
export default Signup;