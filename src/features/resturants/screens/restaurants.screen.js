import React, { useState } from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safe-area.component";

const isAndroid = Platform.OS === "android";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          mode="bar"
          placeholder="Search"
          elevation={3}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
