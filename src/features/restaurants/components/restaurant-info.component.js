import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Axomiya Thali",
    icon,
    photos = [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Ftraditional-sweets-assam-known-as-bihu-pitha-prepared-specially-festival-image169784009&psig=AOvVaw3sYDJhfb4268uVmb7Td-68&ust=1666976017384000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDbiN3vgPsCFQAAAAAdAAAAABAE",
    ],
    address = "Dispur,Assam",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
