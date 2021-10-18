import React from 'react';
import {View, Text, Button} from 'react-native';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';

const Message1 = ({navigation, route}) => {
  const mobile = route.params.mobile;

  return (

    <View style={{flex: 1}}>
      <Card style={{marginTop: 10, flex: 4, marginHorizontal: 20}}>
        <Card.Content>
          <Title style={{textAlign: 'center', fontSize: 24, padding: 10}}>
            आरोग्य / Health डायरी
          </Title>
          <Paragraph
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginTop: 5,
              padding: 10,
            }}>
            सामान्य रुग्ण हा केंद्रबिंदू मानून डॉक्टर , लॅबरोटरी, रेडिओलॉजिस्ट व
            इतर यांनी तपासणीच्या वेळी निर्माण केलेली माहिती वर्ग वारीने साठवून ,
            तसेच रुग्णाच्या स्वतःहाच्या नोंदी व त्रास नोंदवून आवश्यक तेव्हा
            आरोग्ययंत्रणेला आवश्यक पध्दतीने उपलब्ध करून देणे जेणेकरून रुग्णाला
            त्याची आरोग्यविषयक नोंद व सेवा आपत्कालीन किंवा अन्य परिस्थितीत
            त्वरित उपलब्ध होईल हा या उपक्रमाचा मूळ उद्देश आहे. या दृष्टीने आम्ही
            एक ॲप देत आहोत ज्यामुळे पुढे निर्माण होणाऱ्या एका सुरक्षित योजनेचा
            पाया बनताना आपल्या सुचना लक्षात घेऊन त्याप्रमाणे मूर्त रूप देणे शक्य
            होईल.
          </Paragraph>
        </Card.Content>
      </Card>

      <View
        style={{
          flex: 2,
          marginHorizontal: 100,
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Button
          title="Next"
          onPress={() => {
            navigation.navigate('Message2', {mobile: mobile});
          }}></Button>
      </View>
    </View>
  
  
  );
};

export default Message1;
