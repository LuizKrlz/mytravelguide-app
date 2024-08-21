import { Image, ScrollView, StatusBar, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Theme } from "../styles/theme";
import { useTheme } from "@shopify/restyle";
import { Box, Typography } from "../components/atoms";

import { Ionicons } from "@expo/vector-icons";
import { Countries } from "../components/organisms/Countries";
import { PopularCategories } from "../components/organisms/PopularCategories";

function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();

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

export default HomeScreen;
