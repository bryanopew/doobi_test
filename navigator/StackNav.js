import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import AddressEdit from "../screens/AddressEdit";
import ChangeWeight from "../screens/ChangeWeight";
import Feedbacks from "../screens/Feedbacks";
import Likes from "../screens/Likes";
import UserHistory from "../screens/UserHistory";
import UserInfo from "../screens/UserInfo";
import { EvilIcons } from "@expo/vector-icons";
import colors from "../colors";
import styled from "styled-components/native";

const Stack = createNativeStackNavigator();
const GoBack = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;

const StackNav = ({ navigation: { goBack } }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontSize: 18, fontWeight: "600" },
      }}
    >
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="ChangeWeight" component={ChangeWeight} />
      <Stack.Screen name="UserHistory" component={UserHistory} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Feedbacks" component={Feedbacks} />
      <Stack.Screen
        name="AddressEdit"
        component={AddressEdit}
        options={{
          headerShown: true,
          headerTitle: "배송지 편집",
          headerTitleAlign: "center",
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
    </Stack.Navigator>
  );
};

export default StackNav;
