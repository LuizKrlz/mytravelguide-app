import { TouchableOpacity, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { Box } from "../atoms";
import { useTheme } from "@shopify/restyle";

export function ExternalLayout({ handleBack, children }) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} bg="background" position="relative">
      <Box
        position="absolute"
        right={50}
        top={-90}
        bg="blue"
        width={56}
        height={250}
        borderRadius={29}
        opacity={0.1}
        style={{
          transform: [
            {
              rotate: "30deg",
            },
          ],
        }}
      />

      <Box
        position="absolute"
        right={10}
        top={0}
        bg="greenDark"
        width={56}
        height={250}
        borderRadius={29}
        opacity={0.1}
        style={{
          transform: [
            {
              rotate: "30deg",
            },
          ],
        }}
      />

      <TouchableOpacity
        onPress={handleBack}
        style={{ paddingTop: insets.top, marginLeft: 16 }}
      >
        <IonicIcons
          name="arrow-back"
          size={30}
          color={theme.colors.secondary}
        />
      </TouchableOpacity>

      <Image
        width={105}
        height={40}
        style={{ marginLeft: 16, marginTop: 30 }}
        source={{
          uri: Image.resolveAssetSource(require("../../../assets/logo.png"))
            .uri,
        }}
      />
      <Box flex={1} px="m">
        {children}
      </Box>
    </Box>
  );
}
