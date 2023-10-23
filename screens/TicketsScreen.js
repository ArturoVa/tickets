import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";

import { useState, useEffect } from "react";

import { Feather } from '@expo/vector-icons';
import {API, graphqlOperation} from 'aws-amplify';

import {listTickets} from './src/graphql/queries';

import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
import SearchResults from "./components/SearchResults";
Amplify.configure(awsExports);

const TicketsScreen = () => {
    const [tickets, setTickets] = useState([]);
    const [input,setInput] = useState("");
  useEffect(() => {
    fetchTickets();
  }, []);
  async function fetchTickets() {
    try {
      const ticketData = await API.graphql(graphqlOperation(listTickets));
      const tickets = ticketData.data.listTickets.items;
      console.log(tickets)
      setTickets(tickets);
    } catch (err) {
      console.log('error fetching tickets');
    }
  }


    return (<View
    style={{
      flex:1
    }}>
         <View
        style={{
          padding: 10,
          marginTop: "15%",
          marginHorizontal:"5%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor:"#FFC72C",
          borderWidth:4,
          borderRadius:10
        }}
      >
        <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder="Nombre del cliente: " />
        <Feather name="search" size={22} color="black" />

        </View>
        
        <SearchResults data={tickets} input={input} setInput={setInput}/>
        
        <Pressable onPress={fetchTickets} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </Pressable>
       
    </View>)





}

export default TicketsScreen

const styles = StyleSheet.create({
    container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
    todo: {marginBottom: 15},
    input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
    todoName: {fontSize: 20, fontWeight: 'bold'},
    buttonContainer: {
      alignSelf: 'center',
      backgroundColor: 'black',
      paddingHorizontal: 8,
    },
    buttonText: {color: 'white', padding: 16, fontSize: 18},
  });