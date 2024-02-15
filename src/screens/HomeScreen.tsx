import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { faker } from "@faker-js/faker";

import MIcons from "@expo/vector-icons/MaterialIcons";

import theme from "../styles/theme";

function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const cities = [
    {
      id: faker.string.uuid(),
      uri: faker.image.urlLoremFlickr({
        width: 180,
        height: 220,
        category: "paris,eiffel",
      }),
    },
    {
      id: faker.string.uuid(),
      uri: faker.image.urlLoremFlickr({
        width: 180,
        height: 220,
        category: "india,tajmahal",
      }),
    },
    {
      id: faker.string.uuid(),
      uri: faker.image.urlLoremFlickr({
        width: 180,
        height: 220,
        category: "ireland,dublin",
      }),
    },
  ];

  const categories = [
    {
      id: 1,
      title: "Trips",
      imageUri: Image.resolveAssetSource(
        require("../../assets/categories/plane.png")
      ).uri,
    },
    {
      id: 2,
      title: "Hotel",
      imageUri: Image.resolveAssetSource(
        require("../../assets/categories/hotel.png")
      ).uri,
    },
    {
      id: 3,
      title: "Transport",
      imageUri: Image.resolveAssetSource(
        require("../../assets/categories/transport.png")
      ).uri,
    },
    {
      id: 4,
      title: "Events",
      imageUri: Image.resolveAssetSource(
        require("../../assets/categories/events.png")
      ).uri,
    },
  ];

  const handleGoToDetailsCity = () => navigation.navigate("City");

  return (
    <ScrollView style={[{ paddingTop: insets.top + 20 }, styles.page]}>
      <View style={styles.header}>
        <MaterialIcons name="sort-variant" size={30} />
        <View
          style={{
            shadowColor: "#FF287F",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.7,
            shadowRadius: 5,
          }}
        >
          <Image
            width={40}
            height={40}
            style={{
              borderRadius: 5,
            }}
            source={{
              uri: Image.resolveAssetSource(require("../../assets/profile.png"))
                .uri,
            }}
          />
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, marginTop: 30 }}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>Explore the best places in world</Text>
      </View>

      <View style={styles.containerSearch}>
        <TextInput
          style={styles.containerSearchInput}
          placeholder="Search your trip"
        />

        <TouchableOpacity style={styles.containerSearchButton}>
          <MIcons name="search" color="white" size={20} />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            color: theme.brandAccent,
            fontSize: 15,
            marginRight: 10,
            marginLeft: 16,
            fontFamily: "Nunito-SemiBold",
          }}
        >
          All
        </Text>
        <Text
          style={{
            color: theme.mediumBlack,
            fontSize: 15,
            marginRight: 10,
            fontFamily: "Nunito-SemiBold",
          }}
        >
          America
        </Text>
        <Text
          style={{
            color: theme.mediumBlack,
            fontSize: 15,
            marginRight: 10,
            fontFamily: "Nunito-SemiBold",
          }}
        >
          Europe
        </Text>
        <Text
          style={{
            color: theme.mediumBlack,
            fontSize: 15,
            marginRight: 10,
            fontFamily: "Nunito-SemiBold",
          }}
        >
          Oceania
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cities}
        style={{ maxHeight: 260 }}
        contentContainerStyle={{
          paddingLeft: 16,
          paddingTop: 20,
        }}
        keyExtractor={(item) => `${item?.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleGoToDetailsCity}>
            <Image
              resizeMode="contain"
              style={{
                width: 180,
                height: 220,
                opacity: 0.9,
                marginRight: 20,
                borderRadius: 24,
              }}
              source={{
                uri: item.uri,
              }}
            />
          </TouchableOpacity>
        )}
      />

      <View>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "Nunito-Bold",
            color: theme.fullBlack,
            marginLeft: 16,
          }}
        >
          Popular Categories
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginTop: 20,
          }}
        >
          {categories.map((item) => (
            <View key={item.id} style={{ alignItems: "center" }}>
              <Image
                source={{ uri: item.imageUri }}
                resizeMode="cover"
                borderRadius={24}
                width={48}
                height={48}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  fontFamily: "Nunito-SemiBold",
                  color: theme.mediumBlack,
                }}
              >
                {item.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.fullWhite,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "Nunito-Bold",
    color: theme.fullBlack,
    fontSize: 28,
  },
  subtitle: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    color: theme.mediumBlack,
  },
  containerSearch: {
    marginVertical: 20,
    position: "relative",
    marginHorizontal: 16,
    height: 48,
    backgroundColor: "#F4F4F5",
    borderRadius: 40,
  },
  containerSearchInput: {
    height: 48,
    borderRadius: 20,
    paddingLeft: 20,
    color: theme.mediumBlack,
  },
  containerSearchButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.brandAccent,
    borderRadius: 18,
    position: "absolute",
    right: 8,
    top: 6,
  },
});

export default HomeScreen;
