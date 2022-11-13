import { StyleSheet, Text, View, Image, Button } from 'react-native';

const BookTile = (props) => {
    return(
        <View style={styles.tile}>
            <View style={StyleSheet.tileDetails}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.author}>{props.author}</Text>
                <Text style={styles.discription}>{props.discription}</Text>
                <Text style={styles.isbn}>{props.isbn}</Text>
                <Text style={styles.button}>{props.button}</Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
      tile:{
        flexBasis: '50%',
        backgroundColor: "#aca5e6",
        marginVertical: '2%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'#dfdcf2',
        borderRadius: 10,
        padding: 25,
        margin: 4,
      },
    
      tileDetails:{
        padding: 25,
      },
    
      title:{
        fontSize: 30,
        marginTop: 5,
    
      },
    
      author:{
        fontSize: 18,
        marginTop: 5,
      },
    
      discription:{
        marginTop: 8,
        fontSize: 14,
      },
    
      isbn:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12,
      },
      
      button: {
        flexBasis: '50%',//200
        marginVertical: '2%',
        fontSize: 14,
        paddingLeft: 300,
        paddingTop: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'#dfdcf2',
        borderRadius: 10,
        padding: 5,
        
      },

      shoppingcar:{
          paddingTop: 20,
      }
});

export default BookTile;