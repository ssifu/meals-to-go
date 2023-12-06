import React, { useState, useContext } from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const isAndroid = Platform.OS === "android";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
