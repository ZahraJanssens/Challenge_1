import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';


import BookTile from './components/BookTile.js';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading1}>Bookshop</Text>
        <View style={styles.container}>

          <BookTile title="It Ends With Us" author="Author: Colleen Hoover" discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." isbn="ISBN 978-9-0205-5041-2" button="Read me"/>

          <BookTile title="Twisted Love" author="Author: Ana Huang" discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." isbn="ISBN 978-0-3494-3427-8" button="Read me"/>
          
          <BookTile title="They Both Die At The End" author="Author: Adam Silvera" discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." isbn="ISBN 978-1-4711-6620-4" button="Read me"/>
              
          <BookTile title="Things We Never Got Over" author="Author: Elisabeth Lim" discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." isbn="ISBN 978-1-3997-1374-0" button="Read me"/>

          <BookTile title="LoveLess" author="Author: Alice Oseman" discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." isbn="ISBN 978-0-0082-4412-5" button="Read me"/>

          <View style={styles.tile}>
        
            {/* <View style={styles.tilesContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress()} style={styles.tile}></TouchableOpacity>
            </View> */}

          </View>

          
        </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  heading1:{
    fontSize: 40,
    fontWeight:'400',
    margin: 8,
    paddingTop: 30,
   
  },

  container: {
    flex: 1,
    backgroundColor: '#dfdcf2',
    paddingTop: 20, 
    
  },

  // tilesContainer:{
  //   paddingLeft: 20,
  //   flex: 1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   flexGrow: 0,
  //   flexShrink: 0,
  //   justifyContent: 'space-evenly',
  // },

});
