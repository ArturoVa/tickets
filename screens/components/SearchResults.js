import { StyleSheet, View ,FlatList, Pressable, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Card, Text } from '@rneui/themed';


const SearchResults = ({data,input,setInput}) => {
    const navigation = useNavigation();
    
  return (
    <View style={{padding:10}}>
       <FlatList data={data} renderItem={({item}) => {
           if(item.name.toLowerCase().includes(input.toLowerCase())){
               const date = item.createdAt
               
               if(input === ""){
                   return null;
               }
               return (
                  
                       <View style={styles.container}>
                        <Card containerStyle={{ marginTop: 15 }}>
                        <Card.Title>Ticket</Card.Title>
                             <Card.Divider />
                           <Text style={styles.fonts} h4>Nombre del cliente: <Text style={styles.font}>{item.name}</Text></Text>
                           <Text style={styles.fonts} h4>Caja: <Text style={styles.font}>{item.number}</Text></Text>

                           <Text style={styles.fonts} h4>Cantidad: <Text style={styles.font}>{item.amount}</Text></Text>
                           <Text style={styles.fonts} h4>Precio:<Text style={styles.font}>{item.price}</Text></Text>
                           <Text style={styles.fonts} h4>Fecha: <Text style={styles.font}>{date}</Text></Text>
                           <Text style={styles.fonts} h4>Descripción: <Text style={styles.font}>{item.description}</Text></Text>
                           <Text style={styles.fonts} h4>Total:<Text style={styles.font}>{item.total}</Text></Text> 
                           </Card>
                       </View>
                  
               )
           }
       }}/>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    font : {
        fontWeight: 'normal'
    },
    fonts: {
      marginBottom: 8,
      fontWeight: 'bold'
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    });