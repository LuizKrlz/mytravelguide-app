import { faker } from "@faker-js/faker";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MIcons from "@expo/vector-icons/MaterialIcons";
import theme from "../styles/theme";
import { Icon } from "../components/atoms";

function CityDetailsScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const handleGoBack = () => navigation.goBack();

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={styles.header}
        imageStyle={{
          transform: [
            {
              scale: 1.2,
            },
          ],
        }}
        source={{
          uri: Image.resolveAssetSource(require("../../assets/france.png")).uri,
        }}
      >
        <View
          style={{
            paddingTop: insets.top,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={handleGoBack}>
            <MIcons name="arrow-back" color="white" size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MIcons name="favorite" color="tomato" size={20} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title}>Paris, France</Text>
          <Text style={[styles.title, { color: theme.brandAccent }]}>
            $1200
          </Text>
        </View>

        <View style={[styles.row, { marginTop: 20 }]}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MIcons name="star" color="#FF9900" size={20} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Nunito-SemiBold",
                color: theme.mediumBlack,
              }}
            >{`4.9 (2.7K)`}</Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Nunito-SemiBold",
              color: theme.mediumBlack,
            }}
          >
            * Estimated Cost
          </Text>
        </View>

        <View style={[styles.row, { marginTop: 20 }]}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Nunito-SemiBold",
                color: theme.brandAccent,
              }}
            >
              Overview
            </Text>
            <View
              style={{
                width: 4,
                height: 4,
                backgroundColor: theme.brandAccent,
                borderRadius: 2,
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("CityTour")}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Nunito-SemiBold",
                  color: theme.mediumBlack,
                }}
              >
                Details
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Nunito-SemiBold",
                color: theme.mediumBlack,
              }}
            >
              Review
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Nunito-SemiBold",
                color: theme.mediumBlack,
              }}
            >
              Costs
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 16,
            fontFamily: "Nunito-Regular",
            marginTop: 20,
            color: theme.mediumBlack,
          }}
        >
          Paris possesses a rich and attractive cultural scene with shows,
          activities and festivals.
        </Text>

        <View style={[styles.row, { marginTop: 20 }]}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Icon.WatchIcon />
            <View style={{ gap: 5 }}>
              <Text>5 Days</Text>
              <Text
                style={{
                  fontSize: 15,
                  color: theme.mediumBlack,
                  fontFamily: "Nunito-SemiBold",
                }}
              >
                Duration
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Icon.PinIcon />
            <View style={{ gap: 5 }}>
              <Text>5 Days</Text>
              <Text
                style={{
                  fontSize: 15,
                  color: theme.mediumBlack,
                  fontFamily: "Nunito-SemiBold",
                }}
              >
                Distance
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Icon.SunIcon />
            <View style={{ gap: 5 }}>
              <Text>5 Days</Text>
              <Text
                style={{
                  fontSize: 15,
                  color: theme.mediumBlack,
                  fontFamily: "Nunito-SemiBold",
                }}
              >
                Sunny
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, { marginTop: 30 }]}>
          <TouchableOpacity
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: theme.brandAccent,
              borderRadius: 25,
              width: 115,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: theme.fullBlack,
              backgroundColor: theme.fullWhite,
              shadowOffset: {
                width: 1,
                height: 5,
              },
              shadowOpacity: 0.4,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Nunito-Bold",
                color: theme.brandAccent,
              }}
            >
              $1200
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: theme.brandAccent,
              borderRadius: 25,
              width: 200,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: theme.brandAccent,
              shadowOffset: {
                width: 1,
                height: 5,
              },
              shadowOpacity: 0.6,
            }}
          >
            <Text
              style={{
                color: theme.fullWhite,
                fontSize: 16,
                fontFamily: "Nunito-Bold",
              }}
            >
              Book now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    flex: 1,
    height: 400,
  },
  content: {
    flex: 1,
    backgroundColor: theme.fullWhite,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    marginTop: -10,
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 46,
  },
  title: {
    fontSize: 28,
    fontFamily: "Nunito-Bold",
  },
});

export default CityDetailsScreen;
