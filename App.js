import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigator/Root";
import styled from "styled-components/native";
import Constants from "expo-constants/";
import { UserInfoContext, SetUserInfoContext } from "./context";

const Container = styled.View`
  margin-top: ${`${Constants.statusBarHeight}px`};
  flex: 1;
`;

// 나중에 받아올 사용자 정보
const userInfo = {
  nickName: "섭섭",
  target: [{ cal: 832 }, { carb: 92 }, { protein: 42 }, { fat: 21 }],
  history: [
    {
      date: "2022/09/12",
      weight: 100,
      cal: 832,
      carb: 92,
      protein: 42,
      fat: 21,
    },
    {
      date: "2022/09/17",
      weight: 102,
      cal: 832,
      carb: 92,
      protein: 42,
      fat: 21,
    },
    {
      date: "2022/09/21",
      weight: 101,
      cal: 832,
      carb: 92,
      protein: 42,
      fat: 21,
    },
    {
      date: "2022/09/23",
      weight: 99,
      cal: 832,
      carb: 92,
      protein: 42,
      fat: 21,
    },
    {
      date: "2022/09/30",
      weight: 98,
      cal: 832,
      carb: 92,
      protein: 42,
      fat: 21,
    },
    {
      date: "2022/10/02",
      weight: 97,
      cal: 832,
      carb: 92,
      protein: 42,
      fat: 21,
    },
    {
      date: "2022/10/09",
      weight: 97,
      cal: 832,
      carb: 92,
      protein: 42,
      fat: 21,
    },
    {
      date: "2022/10/12",
      weight: 96,
      cal: 832,
      carb: 92,
      protein: 42,
      fat: 21,
    },
    {
      date: "2022/10/18",
      weight: 97,
      cal: 832,
      carb: 92,
      protein: 42,
      fat: 21,
    },
  ],
  cart: {
    noOfMenu: 2,
    totalPrice: 25000,
    deliveryPrice: 2500,
    foods: [
      {
        productName: "포켓샐러드 파스타 샐러드ddddddddddddddd",
        seller: "존맛식품",
        delivery: 2500,
        freeDelivery: 12000,
        price: 4300,
        quantity: 2,
      },
      {
        productName: "간편 한 끼 닭가슴살 & 샐러드 도시락 5종 세트",
        seller: "존맛식품",
        delivery: 2500,
        freeDelivery: 12000,
        price: 4900,
        quantity: 1,
      },
      {
        productName: "맛있닭 닭안심살 구이 훈제 바베큐 맛 플러스 추가 텍스트",
        seller: "맛있닭",
        delivery: 3000,
        freeDelivery: 12000,
        price: 1900,
        quantity: 3,
      },
      {
        productName: "맛있닭 저염 닭가슴살 오리지널",
        seller: "맛있닭",
        delivery: 3000,
        freeDelivery: 20000,
        price: 1400,
        quantity: 1,
      },
      {
        productName: "맛있닭 닭가슴살 한끼만두",
        seller: "맛있닭",
        delivery: 3000,
        freeDelivery: 20000,
        price: 1900,
        quantity: 1,
      },
    ],
  },
  address: [
    {
      postalCode: "04426",
      addressBase: "서울시 용산구 이촌로248",
      addressDetail: "어디아파트 어디동 어디호",
    },
    {
      postalCode: "04426",
      addressBase: "서울 용산구 한강대로",
      addressDetail: "어느빌딩 어느호",
    },
  ],
};

export default function App() {
  const [userData, setUserData] = useState(userInfo);

  return (
    <SetUserInfoContext.Provider value={setUserData}>
      <UserInfoContext.Provider value={userData}>
        <NavigationContainer>
          <Container>
            <Root />
          </Container>
        </NavigationContainer>
      </UserInfoContext.Provider>
    </SetUserInfoContext.Provider>
  );
}
