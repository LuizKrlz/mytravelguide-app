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
import Timeline from "react-native-timeline-flatlist";
import theme from "../styles/theme";
import { format, parseISO } from "date-fns";
import { Icon } from "../components/atoms";

function CityTourScreen({ navigation }) {
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
          <Text style={styles.title}>Tour Details</Text>
          <Text style={[styles.title, { color: theme.brandAccent }]}>
            $1200
          </Text>
        </View>

        <View style={[styles.row, { marginVertical: 20 }]}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MIcons name="star" color="#FF9900" size={20} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Nunito-SemiBold",
                color: theme.mediumBlack,
              }}
            >
              Duration - 7 days
            </Text>
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

        <Timeline
          lineWidth={1}
          lineColor={theme.mediumBlack}
          circleColor={theme.mediumBlack}
          renderFullLine
          data={[
            {
              time: "2024-02-12",
              title: "Event 1",
              description: "Event 1 Description",
            },
            {
              time: "2024-02-13",
              title: "Event 2",
              description: "Event 2 Description",
            },
            {
              time: "2024-02-14",
              title: "Event 3",
              description: "Event 3 Description",
            },
            {
              time: "2024-02-15",
              title: "Event 4",
              description: "Event 4 Description",
            },
          ]}
          innerCircle="dot"
          options={{
            nestedScrollEnabled: true,
            showsVerticalScrollIndicator: false,
            contentContainerStyle: {
              paddingBottom: insets.bottom,
            },
          }}
          renderTime={() => <></>}
          renderDetail={(rowData, sectionId, rowId) => {
            console.log(rowData);
            return (
              <View style={{ padding: 0, marginTop: -10 }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Nunito-SemiBold",
                    color: theme.mediumBlack,
                  }}
                >
                  {format(parseISO(rowData.time), "dd MMM yyyy")}
                </Text>
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Image
                    width={90}
                    height={110}
                    source={{
                      uri: faker.image.urlLoremFlickr({
                        category: "city",
                      }),
                    }}
                    style={{ borderRadius: 15 }}
                  />
                  <View style={{ paddingLeft: 10 }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 20, fontFamily: "Nunito-Bold" }}>
                        {rowData.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "Nunito-Regular",
                          color: theme.mediumBlack,
                        }}
                      >
                        {rowData.description}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <Icon.WatchIcon color={theme.brandAccent} />
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: "Nunito-Bold",
                          color: theme.brandAccent,
                        }}
                      >
                        1 Days
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
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
  },
  title: {
    fontSize: 28,
    fontFamily: "Nunito-Bold",
  },
});

export default CityTourScreen;
