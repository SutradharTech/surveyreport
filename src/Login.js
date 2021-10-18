import React,{useState} from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

const Login = ({navigation}) => {


    const [mobile, setmobile] = useState("")
    const [password, setpassword] = useState("")

    async function Submithandler(){
console.log(mobile,password)

        if(mobile=="" || password==''){
    
            alert("Please enter required filled")
            return
        }
        const res = await axios.post( "http://dev.sutradhar.tech/surveyapi/api/v1/logincustomer/",{
            mobile:mobile,
            password:password
        } );
          console.log('data', res.data);


          if(res.data.Success){

              setpassword('')
              navigation.navigate('Message1',{mobile:mobile});
            setmobile('')
         

          }else{

            alert(res.data.Message)
          }
    
    }
    


    return (
        <View style={{flex:1}}>

            <View style={{flex:1,alignItems:'flex-end',marginTop:5,marginRight:15}}>
                <TouchableOpacity
                onPress={()=>{

                    navigation.navigate("Register")
                }}
                >

                <Text style={{fontSize:18}}> Register</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:2,alignItems:'center',marginTop:50}}>
                <Text style={{fontSize:28,fontWeight:"bold"}}> Login</Text>
            </View>

            <View style={{flex:3}}>



<View style={{flex:1}}>
    <View style={{flex:1}}>
      <TextInput style={{borderWidth:1,borderRadius:10,height:45,marginHorizontal:70}}
      placeholder="Mobile"
      value={mobile}
      onChangeText={(text)=>{

        setmobile(text)
      }}
      >

      </TextInput>

    </View>

</View>
<View style={{flex:1}}>
    <View style={{flex:1}}>
      <TextInput style={{borderWidth:1,borderRadius:10,height:45,marginHorizontal:70}}
      placeholder="Password"
      value={password}
      onChangeText={(text)=>{
          setpassword(text)
      }}
      >

      </TextInput>

    </View>

</View>

            </View>
            <View style={{flex:2,alignItems:'center'}}>
<TouchableOpacity
style={{backgroundColor:'dodgerblue',borderRadius:5,padding:5}}
onPress={Submithandler}
>
    <View>
        <Text style={{fontSize:20}}>
            Login
        </Text>
    </View>
</TouchableOpacity>

            </View>
            <View style={{flex:4}}>


            </View>
        </View>
    )
}

export default Login