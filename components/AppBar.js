import React, { useMemo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Commuity, Chat, Setting } from "../screens/TabScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styled } from "styled-components";

const Tab = createBottomTabNavigator();
const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const AddButtonContainer = styled.TouchableOpacity`
  background-color: purple;
  border-radius: 30px;
  padding: 15px;
  position: absolute;
  bottom: 20px;
  align-self: center;
`;

const AddButton = ({ onPress }) => {
  return (
    <AddButtonContainer onPress={onPress}>
      <MaterialCommunityIcons name="plus" size={30} color="white" />
    </AddButtonContainer>
  );
};

const AddScreen = () => null;

const AppBar = () => {
  const addScreenOptions = useMemo(
    () => ({
      tabBarIcon: () => (
        <AddButton onPress={() => navigation.navigate("AddModal")} />
      ),
    }),
    []
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "purple",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "paperclip" }),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Commuity}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "magnify" }),
        }}
      />
      <Tab.Screen
        name="plus"
        component={AddScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("AddModal");
          },
        })}
        options={addScreenOptions}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "chat" }),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "account" }),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBar;
