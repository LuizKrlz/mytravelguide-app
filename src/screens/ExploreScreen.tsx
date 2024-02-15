import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MIcons from "@expo/vector-icons/MaterialIcons";
import { faker } from "@faker-js/faker";

function ExploreScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ paddingTop: insets.top, flex: 1 }}
      contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
    >
      <View style={styles.header}>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.containerSearchInput}
            placeholder="Search your trip"
          />

          <TouchableOpacity style={styles.containerSearchButton}>
            <MIcons name="search" color="white" size={20} />
          </TouchableOpacity>
        </View>
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

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Nunito-Bold",
            color: theme.fullBlack,
          }}
        >
          Type
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Nunito-Regular",
            color: theme.fullBlack,
          }}
        >
          of tour
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginTop: 20,
        }}
      >
        <View style={{ alignItems: "center", gap: 10 }}>
          <Image
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
            }}
            source={{
              uri: faker.image.urlLoremFlickr({
                category: "places",
              }),
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Nunito-SemiBold",
              color: theme.mediumBlack,
            }}
          >
            {faker.lorem.word()}
          </Text>
        </View>

        <View style={{ alignItems: "center", gap: 10 }}>
          <Image
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
            }}
            source={{
              uri: faker.image.urlLoremFlickr({
                category: "places",
              }),
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Nunito-SemiBold",
              color: theme.mediumBlack,
            }}
          >
            {faker.lorem.word()}
          </Text>
        </View>

        <View style={{ alignItems: "center", gap: 10 }}>
          <Image
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
            }}
            source={{
              uri: faker.image.urlLoremFlickr({
                category: "places",
              }),
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Nunito-SemiBold",
              color: theme.mediumBlack,
            }}
          >
            {faker.lorem.word()}
          </Text>
        </View>
        <View style={{ alignItems: "center", gap: 10 }}>
          <Image
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
            }}
            source={{
              uri: faker.image.urlLoremFlickr({
                category: "places",
              }),
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Nunito-SemiBold",
              color: theme.mediumBlack,
            }}
          >
            {faker.lorem.word()}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          marginTop: 20,
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Nunito-Bold",
            color: theme.fullBlack,
          }}
        >
          Best
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Nunito-Regular",
            color: theme.fullBlack,
          }}
        >
          Adventure
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, gap: 20 }}>
          <Image
            style={{ borderRadius: 20, margin: 4, flex: 1 }}
            source={{ uri: faker.image.urlLoremFlickr() }}
          />
          <Image
            style={{ borderRadius: 20, margin: 4, flex: 1 }}
            source={{ uri: faker.image.urlLoremFlickr() }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={{ borderRadius: 20, margin: 4 }}
            height={340}
            source={{ uri: faker.image.urlLoremFlickr() }}
          />
          <Image
            style={{ borderRadius: 20, margin: 4 }}
            height={48}
            source={{ uri: faker.image.urlLoremFlickr() }}
          />
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
    flex: 1,
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

export default ExploreScreen;
