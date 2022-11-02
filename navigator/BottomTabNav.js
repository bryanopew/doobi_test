import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Mypage from "../screens/Mypage";
import Order from "../screens/Order";
import Cart from "../screens/Cart";
import { EvilIcons } from "@expo/vector-icons";
import colors from "../colors";

const GoBack = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;

const Tab = createBottomTabNavigator();
const BottomTabNav = ({ navigation: { goBack } }) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mypage" component={Mypage} />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: true,
          headerTitle: "주문/결제",
          headerTitleAlign: "center",
          headerStyle: {},
          headerLeft: () => (
            <GoBack onPress={() => goBack()}>
              <EvilIcons
                name="chevron-left"
                size={32}
                color={colors.textMain}
              />
            </GoBack>
          ),
        }}
      />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
