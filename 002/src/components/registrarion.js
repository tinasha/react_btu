import React from 'react';
import { 
    styleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react'


function registration() {
  return (
      <view style ={styleSheet.registration}>
          <text style={stzles.header}> registration

          </text>
      </view>
  );
}

export default registration;

const styles = StyleSheet.create({
    registration : { 
        fontSize: 24 ,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor : '#199187',
        borderBotoomWidth: 1,


    },
});