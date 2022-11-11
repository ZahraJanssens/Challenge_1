import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// require()
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading1}>Bookshop</Text>
        <View >

          <View style={styles.tile}>
            <View style={styles.tileDetails}>
              <Text style={styles.tileTitle}>It Ends With Us</Text>
              <Text style={styles.Author}>Author: Colleen Hoover</Text>
              <Text style={styles.Discription}>Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s.</Text>
              <Text style={styles.ISBN}>ISBN 978-9-0205-5041-2</Text>
            </View>

            <View style={styles.tilesContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress()} style={styles.tile}>
              <View>
                <Text style={styles.tileText}>Read me</Text>
              </View>
            </TouchableOpacity>
            </View>

          </View>

          <View style={styles.tile}>
            <View style={styles.tileDetails}>
              <Text style={styles.tileTitle}>Twisted Love</Text>
              <Text style={styles.Author}>Author: Ana Huang</Text>
              <Text style={styles.Discription}>Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s.</Text>
              <Text style={styles.ISBN}>ISBN 978-0-3494-3427-8</Text>
            </View>

            <View style={styles.tilesContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress()} style={styles.tile}>
              <View>
                <Text style={styles.tileText}>Read me</Text>
              </View>
            </TouchableOpacity>
            </View>

          </View>
          
          <View style={styles.tile}>
            <View style={styles.tileDetails}>
              <Text style={styles.tileTitle}>They Both Die At The End</Text>
              <Text style={styles.Author}>Author: Adam Silvera</Text>
              <Text style={styles.Discription}>Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s.</Text>
              <Text style={styles.ISBN}>ISBN 978-1-4711-6620-4</Text>
            </View>

            <View style={styles.tilesContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress()} style={styles.tile}>
              <View>
                <Text style={styles.tileText}>Read me</Text>
              </View>
            </TouchableOpacity>
            </View>

          </View>

          <View style={styles.tile}>
            <View style={styles.tileDetails}>
              <Text style={styles.tileTitle}>Things We Never Got Over</Text>
              <Text style={styles.Author}>Author: Elisabeth Lim</Text>
              <Text style={styles.Discription}>Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s.</Text>
              <Text style={styles.ISBN}>ISBN 978-1-3997-1374-0</Text>
            </View>

            <View style={styles.tilesContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress()} style={styles.tile}>
              <View>
                <Text style={styles.tileText}>Read me</Text>
              </View>
            </TouchableOpacity>
            </View>

          </View>

          <View style={styles.tile}>
            <View style={styles.tileDetails}>
              <Text style={styles.tileTitle}>LoveLess</Text>
              <Text style={styles.Author}>Author: Alice Oseman</Text>
              <Text style={styles.Discription}>Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s.</Text>
              <Text style={styles.ISBN}>ISBN 978-0-0082-4412-5</Text>
            </View>

            <View style={styles.tilesContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress()} style={styles.tile}>
              <View>
                <Text style={styles.tileText}>Read me</Text>
              </View>
            </TouchableOpacity>
            </View>
            
          </View>
          
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

  tilesContainer:{
    paddingLeft: 320,
    
   
  },

  tile:{
    flexBasis: '50%',
    backgroundColor: "#aca5e6",
    marginVertical: '2%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor:'#dfdcf2',
    borderRadius: 10,
    padding: 5,
    paddingTop: 5,
    margin: 5,
  },

  tileDetails:{
    padding: 25,
  },

  tileTitle:{
    fontSize: 24,
    marginTop: 16,

  },

  Author:{
    fontSize: 14,
    marginTop: 5,
  },

  Discription:{
    marginTop: 8,
    fontSize: 12,
  },

  ISBN:{
    marginTop: 10,
  },
  
  tileText: {
    fontSize: 16,
    fontWeight: '60',
  },

});
