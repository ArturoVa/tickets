import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {createProducto, updateProducto} from './src/graphql/mutations';
import {getProducto, listProductos} from './src/graphql/queries';

import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

const initialState = {name: '', amount: 0};

const AlmacenScreen = () => {
  const [formState, setFormState] = useState(initialState);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0)
  const [manzanas, setmanzanas] = useState(0)
  useEffect(() => {
    fetchProductos();
  }, []);

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  async function fetchProductos() {
    try {
        
      const productoData = await API.graphql(graphqlOperation(getProducto, {id: "4ed151bd-e825-430b-8d39-617eb17b2f79"}));
        setName(productoData.data.getProducto.name)
        setAmount(productoData.data.getProducto.amount)
      
    } catch (err) {
        console.log(err)
      console.log('error fetching productos');
    }
  }

  async function addProducto() {
    try {
      
      await API.graphql(graphqlOperation(updateProducto, {input: {id: "4ed151bd-e825-430b-8d39-617eb17b2f79", amount: amount + manzanas}}));
      setmanzanas(0)
      fetchProductos()
    } catch (err) {
      console.log('error creating producto:', err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Text
                    style={{
                      textAlign: "center",
                      fontSize: 30,
                      fontWeight: "500",
                      paddingHorizontal: 6,
                    }}
                  >
                    Manzanas:
                  </Text>
      <Pressable
                style={{ flexDirection: "row", alignSelf: 'center', gap: 10, marginBottom: 30, marginTop: 30}}
              >
                <Pressable
                  onPress={() => {setmanzanas(Math.max(0, manzanas - 1))}}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >

                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </Pressable>
  
                <Pressable>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "500",
                      paddingHorizontal: 6,
                    }}
                  >
                    {manzanas}
                  </Text>
                </Pressable>
  
                <Pressable
                  onPress={() => setmanzanas((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
        <Pressable onPress={addProducto} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Agregar</Text>
        </Pressable>
       
        <Text style={{alignSelf: 'center', marginTop: 40, fontSize: 20, fontWeight: 500}}>Cantidad de {name}: </Text>
        <Text style={{alignSelf: 'center', marginTop: 30, fontSize: 20, fontWeight: 500}}>{amount}</Text>
        

        <Pressable onPress={fetchProductos} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </Pressable>
       

      </View>
    </SafeAreaView>
  );
};

export default AlmacenScreen;


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignSelf: 'center',},
  producto: {marginBottom: 15},
  input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
  productoName: {fontSize: 20, fontWeight: 'bold'},
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: {color: 'white', padding: 16, fontSize: 18},
});