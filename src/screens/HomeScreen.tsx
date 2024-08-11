import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
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
import { useTheme } from "@shopify/restyle";
import { Box } from "../components/atoms";
import { Typography } from "../components/atoms/Typography";
import { Ionicons } from "@expo/vector-icons";
import { Countries } from "../components/organisms/Countries";
import { PopularCategories } from "../components/organisms/PopularCategories";

function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <ScrollView
      style={{
        paddingTop: insets.top + 20,
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <StatusBar />
      <Box
        flexDirection="row"
        px="m"
        alignItems="center"
        justifyContent="space-between"
      >
        <MaterialIcons name="sort-variant" size={30} />
        <Box>
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
        </Box>
      </Box>

      <Box px="m" mt="l">
        <Typography variant="header">Discover</Typography>
        <Typography variant="paragraph-one-regular" color="secondary" mt="s">
          Explore the best places in world
        </Typography>
      </Box>

      <Box
        height={50}
        bg="lightSecondary"
        mx="m"
        borderRadius={24}
        my="l"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        px="s"
      >
        <TextInput
          readOnly
          placeholder="Search your trip"
          placeholderTextColor={theme.colors.secondary}
          style={{
            flex: 1,
            paddingHorizontal: 8,
            color: theme.colors.secondary,
            fontSize: 15,
          }}
        />

        <Box
          bg="primary"
          alignItems="center"
          justifyContent="center"
          borderRadius={35}
          width={36}
          height={36}
        >
          <Ionicons name="search" color="white" size={15} />
        </Box>
      </Box>

      <Countries />

      <PopularCategories />
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
