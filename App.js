import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
// require()

import BookTile from '.components/BookTile';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading1}>Bookshop</Text>
        <View style={styles.tilesContainer}>

          <BookTile Title="It Ends With Us" Author="Author: Colleen Hoover" Discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." ISBN="ISBN 978-9-0205-5041-2"/>

          <BookTile Title="Twisted Love" Author="Author: Ana Huang" Discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." ISBN="ISBN 978-0-3494-3427-8"/>
          
          <BookTile Title="They Both Die At The End" Author="Author: Adam Silvera" Discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." ISBN="ISBN 978-1-4711-6620-4"/>
              
          <BookTile Title="Things We Never Got Over" Author="Author: Elisabeth Lim" Discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." ISBN="ISBN 978-1-3997-1374-0"/>

          <BookTile Title="LoveLess" Author="Author: Alice Oseman" Discription="Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s." ISBN="ISBN 978-0-0082-4412-5"/>

          {/* <View style={styles.tile}>
        
            <View style={styles.tilesContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress()} style={styles.tile}>
              <View>
                <Text style={styles.tileText}>Read me</Text>
              </View>
            </TouchableOpacity>
            </View>

          </View> */}

          
        </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdcf2',
    paddingTop: 56,
    
  },

  heading1:{
    fontSize: 35,
    margin: 8,
  },

  shoppingcar:{

  },

  tilesContainer:{
    paddingLeft: 320,
  },

});
