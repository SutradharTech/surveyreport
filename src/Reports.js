import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView, Button, Image, Pressable} from 'react-native';
import axios from 'axios';
import Share from 'react-native-share';

const Reports = ({navigation, route}) => {
  const mobile=route.params.mobile
//   const mobile = '555555';
  //   const [mobile, setmobile] = useState('66');
  console.log('mobile:', mobile);
  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    const res = await axios.post(
      'http://103.151.97.157/surveyapi/api/v1/' + 'surveybymobile/',
      {
        mobile: mobile,
      },
    );
    console.log('data', res.data);

    if (res.data.Success) {
      setdata(res.data.data);
    } else {
      setdata([]);
    }
  }


  const myCustomShare = async(image) => {
    const shareOptions = {
      message: 'test Share',
      url: 'data:image/jpeg;base64,'+image,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };


  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 28}}>Survey Reports</Text>
      </View>

      {/* <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 10}}>
        <View style={{flex:2}}>

        <TextInput
          style={{
            flex: 3,
            borderWidth: 1,
            borderRadius: 5,
            marginHorizontal: 10,
          }}
          placeholder="Mobile"
          onChangeText={text => {
            setmobile(text);
          }}></TextInput>
        </View>
        <View style={{flex:1}}>

        <Button title="Search" onPress={getdata}></Button>
</View>
      </View> */}

      <View style={{flex: 14, marginTop: 30, marginHorizontal: 10,backgroundColor:'lightgray'}}>
        <ScrollView>
          {data.length == 0 ? (
            <View style={{alignItems: 'center', marginTop: 200}}>
              <Text style={{fontSize: 28}}>NO Record found</Text>
            </View>
          ) : (
            data.map((item, index) => {
              if (item.answerimage == '') {
                return (
                  <View style={{flexDirection: 'row',backgroundColor:'white',marginVertical:5,borderRadius:5,marginHorizontal:5}}>
                    <View style={{flex: 1.4}}>
                      <Text style={{fontSize: 20,padding:5}}>
                        {index + 1} {item.question} :
                      </Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={{fontSize: 20,padding:5}}>{item.answer}</Text>
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={{flex: 1, flexDirection: 'column',marginVertical:5}}>
                    <View style={{flexDirection: 'row',backgroundColor:'white',borderRadius:5,marginHorizontal:5}}>
                      <View style={{flex: 1.4}}>
                        <Text style={{fontSize:20}}>
                          {index + 1} {item.question} :
                        </Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={{fontSize:20,padding:5}}>{item.answer}</Text>
                      </View>
                    </View>
                    <View style={{flex: 4, margin: 20}}>
                      <Image
                        style={{
                          width: "100%",
                          height: 300,
                          borderWidth: 1,
                          borderColor: 'black',
                          borderRadius:10
                        }}
                        source={{
                          uri: `data:image/gif;base64,${item.answerimage}`,
                        }}
                      />
                      <Pressable
                      onPress={()=>{
                        myCustomShare(item.answerimage)
                      }}
                      >
                        <Text>
                          share
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                );
              }
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Reports;
