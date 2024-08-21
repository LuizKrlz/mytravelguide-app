import { faker } from "@faker-js/faker";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MIcons from "@expo/vector-icons/MaterialIcons";
import theme from "../../styles/theme";
import { Box, Icon, Typography } from "../../components/atoms";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "../../components/organisms/Tabs";

export function CityDetailsUI({ handleGoBack }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.header}
        imageStyle={{
          height: 500,
          transform: [
            {
              scale: 1.1,
            },
          ],
        }}
        source={{
          uri: Image.resolveAssetSource(require("../../../assets/france.png"))
            .uri,
        }}
      >
        <Box
          style={{ marginTop: insets.top }}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Pressable onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Box bg="white" p="s" borderRadius={15}>
            <Icon.Favorite color={theme.colors.secondary} />
          </Box>
        </Box>
      </ImageBackground>
      <Box
        flex={1}
        borderTopLeftRadius={40}
        borderTopRightRadius={40}
        style={{ marginTop: -10 }}
        bg="white"
        pt="xl"
        px="l"
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="header">Paris, France</Typography>
          <Typography variant="header" color="primary">
            $1200
          </Typography>
        </Box>
        <Box
          pt="s"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flexDirection="row" alignItems="center" gap="s">
            <Ionicons name="star" size={20} color={theme.colors.orange} />
            <Typography color="secondary" variant="paragraph-two-regular">
              4.9 (2.7k)
            </Typography>
          </Box>
          <Typography variant="paragraph-two-semibold" color="secondary">
            * Estimated Cost
          </Typography>
        </Box>

        <Tabs
          tabs={[
            {
              title: "Overview",
            },
            {
              title: "Details",
            },
            {
              title: "Reviews",
            },
            {
              title: "Costs",
            },
          ]}
        />
      </Box>
    </View>
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
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,

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
