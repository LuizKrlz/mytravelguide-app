import { TouchableOpacity, View, Image } from "react-native";
import theme from "../../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IonicIcons from "@expo/vector-icons/Ionicons";

export function ExternalLayout({ handleBack, children }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.fullWhite,
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          right: 50,
          top: -90,
          backgroundColor: "#009BFF",
          width: 56,
          height: 250,
          borderRadius: 29,
          opacity: 0.1,
          transform: [
            {
              rotate: "30deg",
            },
          ],
        }}
      />

      <View
        style={{
          position: "absolute",
          right: 10,
          top: 0,
          backgroundColor: "#97B38A",
          width: 56,
          height: 250,
          borderRadius: 29,
          opacity: 0.1,
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
        <IonicIcons name="arrow-back" size={30} color={theme.mediumBlack} />
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
      <View style={{ paddingHorizontal: 16, flex: 1 }}>{children}</View>
    </View>
  );
}
