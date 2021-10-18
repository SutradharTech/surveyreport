import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';

const Otp = ({navigation, route}) => {
  const mobile = route.params.mobile;
  console.log("mobile",mobile)

  const [otp, setotp] = useState('');

  async function Submithandler() {

    console.log("otp",otp)

    if (mobile == '' || otp == '') {
      alert('Please enter required filled');
      return;
    }
    console.log('hello');
    const res = await axios.post(
      'http://dev.sutradhar.tech/surveyapi/api/v1/validateotp/',
      {
        mobile: mobile,
        otp: otp,
      },
    );
    console.log('data', res.data);

    if (res.data.Success) {
      setotp('')
      navigation.navigate('Reports',{mobile:mobile});
    } else {
      alert(res.data.Message);
    }
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2}}></View>

      <View style={{flex: 1}}>
        <TextInput
          style={{
            borderWidth: 1,
            marginHorizontal: 120,
            borderRadius: 10,
            textAlign: 'center',
            height:50
          }}
          placeholder="Otp"
          onChangeText={text => {
            setotp(text);
          }}></TextInput>
        <TouchableOpacity
          style={{
            backgroundColor: 'dodgerblue',
            marginTop: 10,
            marginHorizontal: 140,
            borderRadius: 10,
            height:50
          }}
          onPress={Submithandler }
        // onPress={()=>{
        //     console.log("clicked")
        // Submithandler
        // }}
          >
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20,marginTop:15}}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}></View>
    </View>
  );
};

export default Otp;
