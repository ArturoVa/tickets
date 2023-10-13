import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TicketScreen from "./screens/TicketScreen";
import { FontAwesome } from "@expo/vector-icons";
import TicketsScreen from "./screens/TicketsScreen";


import AlmacenScreen from "./screens/AlmacenScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Ticket"
          component={TicketScreen}
          options={{
            tabBarLabel: "Ticket",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="ticket" size={24} color="#6c1c11" />
              ) : (
                <FontAwesome name="ticket" size={24} color="black" />
              ),
          }}
        />
         <Tab.Screen
          name="Tickets"
          component={TicketsScreen}
          options={{
            tabBarLabel: "Tickets",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="stack-overflow" size={24} color="#6c1c11" />
              ) : (
                <FontAwesome name="stack-overflow" size={24} color="black" />
              ),
          }}
        />
         <Tab.Screen
          name="Almacen"
          component={AlmacenScreen}
          options={{
            tabBarLabel: "Almacen",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="garage" size={24} color="#6c1c11" />
              ) : (
                <MaterialCommunityIcons name="garage" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
