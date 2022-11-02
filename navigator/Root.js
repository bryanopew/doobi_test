import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNav from "./BottomTabNav";
import StackNav from "./StackNav";
import {
  ComponentRefContext,
  InputValuesContext,
  OrderInfoContext,
  SetInputValuesContext,
  SetOrderInfoContext,
} from "../context";

const Stack = createNativeStackNavigator();

const Root = () => {
  // root에서 stack으로 값 전달해야해서 input들 정보를 Order Screen (bottomTab) 에서
  // 정의하면 stack으로 절대 못넘겨줌... state관리가 안됨 -> rootNav에서 정의!
  const componentRef = useRef([]);
  const noOfInputs = 3;
  // 현재 -> 0: 이름 | 1: 연락처 | 2. 주소
  const [inputValues, setInputValues] = useState(
    new Array(noOfInputs).fill("")
  );

  const [orderInfo, setOrderInfo] = useState({
    nickName: "",
    recipient: "",
    phone: "",
    postalCode: "",
    addressBase: "",
    addressDetail: "",
    payment: "",
  });

  return (
    <InputValuesContext.Provider value={inputValues}>
      <SetInputValuesContext.Provider value={setInputValues}>
        <OrderInfoContext.Provider value={orderInfo}>
          <SetOrderInfoContext.Provider value={setOrderInfo}>
            <ComponentRefContext.Provider value={componentRef}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
                <Stack.Screen name="StackNav" component={StackNav} />
              </Stack.Navigator>
            </ComponentRefContext.Provider>
          </SetOrderInfoContext.Provider>
        </OrderInfoContext.Provider>
      </SetInputValuesContext.Provider>
    </InputValuesContext.Provider>
  );
};

export default Root;
