import React, { useState, useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesConext } from "../../../services/favourites/favourites.context";
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

export default function RestaurantsScreen({ navigation }) {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesConext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />

      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantsDetail", { item })}
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
