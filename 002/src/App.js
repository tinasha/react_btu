import React from 'react';
import registration from './components/registrarion'


function App() {
  return (
    <view style ={styles.container}>
      <registration />
    </view>
}

export default App;
const styles = StyleSheet.create ({
  container : {
    flex: 1,
    justifyContent: 'center',
    backgroundColor : '#36485f',
    paddingLeft: 60 ,
    paddingRight : 60 ,

  },
});