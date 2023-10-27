import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    Alert
  } from "react-native";
  import React, { useLayoutEffect, useState, useEffect } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
  import { MaterialIcons } from '@expo/vector-icons';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import { Feather } from "@expo/vector-icons";
  import DatePicker from "react-native-date-ranges";
  import { FontAwesome } from '@expo/vector-icons';
  import { BottomModal } from "react-native-modals";
  import { ModalFooter } from "react-native-modals";
  import { ModalButton } from "react-native-modals";
  import { ModalTitle } from "react-native-modals";
  import { SlideAnimation } from "react-native-modals";
  import { ModalContent } from "react-native-modals";

  import {API, graphqlOperation} from 'aws-amplify';
import { createTicket, updateProducto } from './src/graphql/mutations';
import { getProducto } from "./src/graphql/queries";
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
import COLORS from '../screens/styles/Constants'
Amplify.configure(awsExports);


const initialState = {name: '', number: 0, price: 0, amount: 0, total: 0, description: ''};



  
  const TicketScreen = () => {
    const [formState, setFormState] = useState(initialState);
    const [tickets, setTickets] = useState([]);
    const navigation = useNavigation();
    const [ can, setCan] = useState(0)
    const route = useRoute();
    const [manzanas, setmanzanas] = useState(0);
    const [price, setPrice] = useState(0)
    
    
    const [modalVisibile, setModalVisibile] = useState(false);
    


    useEffect(() => {
      fetchProductos();
    }, []);


    function setInput(key, value) {
      setFormState({...formState, [key]: value});

      if(key == 'price') setPrice(value)
     
      
    }
    async function addTicket() {
      try {
        const ticket = {...formState};
        console.log(formState)
        console.log('ticket: ')
        console.log(ticket)

        
        
        
        setTickets([...tickets, ticket]);
        setFormState(initialState);
        
        addProducto()
        await API.graphql(graphqlOperation(createTicket, {input: {name: ticket.name, number: ticket.number, price: ticket.price, amount: ticket.amount, total: price* manzanas, description: ticket.description}}));
        setPrice(0)
      } catch (err) {
        console.log('error creating ticket:', err);
      }
    }
    async function fetchProductos() {
      try {
          
        const productoData = await API.graphql(graphqlOperation(getProducto, {id: "4ed151bd-e825-430b-8d39-617eb17b2f79"}));
        setCan(productoData.data.getProducto.amount)
        
      } catch (err) {
          console.log(err)
        console.log('error fetching productos');
      }
    }

    async function addProducto() {
      try {
        fetchProductos();
        
        await API.graphql(graphqlOperation(updateProducto, {input: {id: "4ed151bd-e825-430b-8d39-617eb17b2f79", amount:can - manzanas}}));
        setmanzanas(0)
        
      } catch (err) {
        console.log('error creating producto:', err);
      }
    }
  


    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Frutería Macías",
        headerTitleStyle: {
          fontSize: 20,
          fontFamily:"sans-serif",
          fontWeight: "bold",
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#8AA39B",
          height: 110,
          borderBottomColor: "transparent",
          shadowColor: "#000",
          shadowOffset: {
          	width: 0,
          	height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
        
          elevation: 6,
        },
        
      });
    }, []);
    
   
  
    
  
    return (
      <>
        <View style={{
          backgroundColor: "#fff",
          flex:1,
          
        }}>
         
  
          <ScrollView >
            <View
              style={{
<<<<<<< HEAD
                margin: "5%",
                borderColor: "transparent",
=======
                margin: 20,
                borderColor: "#fff",
>>>>>>> 2c90497 (Se cambio el estilo)
                borderWidth: 3,
                borderRadius: 3,
                display:"flex",
                gap:10
                
              }}
            >
              <View style={styles.shadowProp}>
              <Pressable
                style={styles.inputCard}
                
              >
               <Ionicons name="person-outline" size={24} color="black" />
                <TextInput
                  onChangeText={value => setInput('name', value)}
                  value={formState.name}
                  placeholderTextColor="black"
                  placeholder={
                    route?.params ? route.params.input : "Nombre del cliente"
                  }
                />
              </Pressable>
              </View>
              <Pressable
                
                style={styles.inputCard}
              >
               <MaterialIcons name="format-list-numbered" size={24} color="black" />
                <TextInput
                  onChangeText={value => setInput('number', Number(value))}
                  value={`${value=formState.number}`}
                  placeholderTextColor="black"
                  placeholder={
                    route?.params ? route.params.input : "Número de cajón"
                  }
                />
              </Pressable>
                  
              
              
  
              <Pressable
                onPress={() => setModalVisibile(!modalVisibile)}
                style={styles.inputCard}
              >
                <MaterialCommunityIcons name="fruit-cherries" size={24} color="black" />
                <Text>
                  Manzanas: {manzanas}
                </Text>
                
              </Pressable>

              

              



              <Pressable
                
                style={styles.inputCard}
              >
                <FontAwesome name="money" size={24} color="black" />
                <Text onChangeText={(value) => setInput('total', value)}>
                  Total: {price*manzanas}
                </Text>
                
              </Pressable>
              <Pressable
                onPress={addTicket}
                style={[{
                  paddingHorizontal: 10,
                  borderColor:"transparent",
                  paddingHorizontal: 10,
                  borderWidth: 2,
                  paddingVertical: 15,
                  backgroundColor: "#4a6bb4",
                }, styles.rounded]}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  Crear Ticket
                </Text>
              </Pressable>
              
            </View>
            <Pressable onPress={fetchProductos} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </Pressable>
  
            <Pressable
              style={{
                marginTop: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 200, height: 200, resizeMode: "cover" }}
                source={{
                  uri: "https://live.staticflickr.com/65535/53197879150_50e05ae005_z.jpg",
                }}
              />
            </Pressable>
          </ScrollView>
        </View>
  
        <BottomModal
          swipeThreshold={200}
          onBackdropPress={() => setModalVisibile(!modalVisibile)}
          swipeDirection={["up", "down"]}
          footer={
            <ModalFooter>
              <ModalButton
                text="Listo"
                style={{
                  marginBottom: 20,
                  color: "#fff",
                  backgroundColor: "#4a6bb4",
                }}
                onPress={() => setModalVisibile(!modalVisibile)}
              />
            </ModalFooter>
          }
          modalTitle={<ModalTitle title="Selecciona la fruta" />}
          modalAnimation={
            new SlideAnimation({
              slideFrom: "bottom",
            })
          }
          onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
          visible={modalVisibile}
          onTouchOutside={() => setModalVisibile(!modalVisibile)}
        >
          <ModalContent style={{ width: "100%", height: 310 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Manzanas
              </Text>
              <Pressable
                
                style={styles.inputCard}
              >
               <MaterialIcons name="description" size={24} color="black" />
                <TextInput
                  onChangeText={value => setInput('description', value)}
                  placeholderTextColor="black"
                  value={formState.description}
                  placeholder={
                    route?.params ? route.params.input : "Desc:"
                  }
                />
              </Pressable>
              <Pressable
                
                style={[styles.inputCard]}
              >
               <Ionicons name="pricetag" size={24} color="black" />
                <TextInput
                  onChangeText={value => setInput('price', Number(value))}
                  value={`${value=formState.price}`}
                  placeholderTextColor="black"
                  placeholder={
                    route?.params ? route.params.input : "Precio:"
                  }
                />
              </Pressable>
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Pressable
                  onPress={() => {setmanzanas(Math.max(0, manzanas - 1))
                                 setInput('amount', Math.max(0, manzanas - 1))
                  
                  }}
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
                  onPress={() => {setmanzanas((c) => c + 1)
                    setInput('amount', manzanas+1)
                  
                  
                  }}
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

             
       
            </View>
                    
  
            
          </ModalContent>
        </BottomModal>
      </>
    );
  };
  
  export default TicketScreen;
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
    rounded:{
      borderRadius:50
    },
    shadowProp: {
      shadowColor: "#000",
      shadowOffset: {
      	width: 0,
      	height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
    inputCard: {
      borderRadius:10,
      borderColor:COLORS.feldgrau,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingHorizontal: 10,
      borderWidth: 2,
      paddingVertical: 15,
      margin:8
    },
    buttonText: {color: 'white', padding: 16, fontSize: 18},
  });