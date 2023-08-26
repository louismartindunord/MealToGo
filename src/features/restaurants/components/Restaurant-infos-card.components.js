import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Card } from "react-native-paper";
import styled from 'styled-components/native'

const Title = styled.Text`
  padding: 16px;
  color: red;
 
`;

// Pour commencer à créer la disposition du restaurant sans data il faut le définir comme un objet vide
// avec {restaurant = {}}
export const RestaurantInfosCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    photos = [
      "https://img.freepik.com/photos-gratuite/restaurant-interieur_1127-3394.jpg?w=2000&t=st=1692941740~exp=1692942340~hmac=0eb483161ead8d72cdf09238e03041fcc090d7a13843c87f2b7ddb26362ef1cb",
    ],
    adress = "A00 some random street",
    isOpenNow = true,
    rating = 4,
    isCloseTemporally = false,
  } = restaurant;

  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          style={styles.cover}
          key={name}
          source={{ uri: photos[0] }}
        />
        <Title>{name}</Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
