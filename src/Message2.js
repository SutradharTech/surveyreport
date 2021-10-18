import React from 'react';
import {View, Text, Button} from 'react-native';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';

const Message2 = ({navigation, route}) => {
  const mobile = route.params.mobile;

  return (
    <View style={{flex: 1}}>
      <Card style={{marginTop: 10, flex: 5, marginHorizontal: 20}}>
        <Card.Content>
          <Title style={{textAlign: 'center', fontSize: 24, padding: 10}}>
            TransPharm
          </Title>
          <Paragraph
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginTop: 5,
              padding: 10,
            }}>
            Welcome to the ecosystem of healthcare industry in our region. The
            motive of TransPharm is to create a greed of various stakeholders
            performing in the area. This will create social forum along with
            business relationship between all the stakeholders including
            patients. Each patient , for whom the industry is , should be
            comfortably placed in transparency of information and ease of
            processes using the latest technology. To start with this is the
            basic APP provided to you with all your collected information, which
            further will be a tool to connect to grid and every stakeholder .
            Knowledge sharing process will also be available which will help the
            growth of each of us.
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
            navigation.navigate('Profile', {mobile: mobile});
          }}></Button>
      </View>
    </View>
  );
};

export default Message2;
