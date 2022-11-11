import { StyleSheet, Text, View, Image } from 'react-native';

const BookTile = (props) => {
    return(
        <View style={StyleSheet.tile}>
            <Image
                style={StyleSheet.Shoppingcar}
                source={require('./assets/shoppingcar.svg')}
            />
            <View style={StyleSheet.tileDetail}>
                <Text style={StyleSheet.tileTitle}>{props.title}</Text>
                <Text style={StyleSheet.tileAuthor}>{props.Author}</Text>
                <Text style={StyleSheet.Discription}>{props.Discription}</Text>
                <Text style={StyleSheet.ISBN}>{props.ISBN}</Text>
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

export default BookTile;