import { useTheme } from "@shopify/restyle";
import { Image, Pressable } from "react-native";
import { Box } from "../../atoms";
import { Typography } from "../../atoms/Typography";
import { Ionicons } from "@expo/vector-icons";

type TCountryCardProps = {
  image: {
    uri: string;
  };
  onPress(): void;
  isFavorite?: boolean;
  title: string;
  subtitle: string;
};

export function CountryCard({
  image,
  onPress,
  isFavorite,
  title,
  subtitle,
}: TCountryCardProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        marginRight: 16,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Box width={180} height={220} position="relative" overflow="hidden">
        <Image
          source={{ uri: image.uri }}
          resizeMode="cover"
          fadeDuration={200}
          style={{ flex: 1, borderRadius: 20 }}
        />

        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="black"
          opacity={0.5}
          zIndex={1}
        />

        <Box
          position="absolute"
          bottom={0}
          flexDirection="row"
          alignItems="flex-end"
          pb="m"
          justifyContent="space-between"
          left={0}
          right={0}
          top={0}
          px="s"
          zIndex={99}
        >
          <Box>
            <Typography variant="paragraph-two-bold" color="white">
              {title}
            </Typography>
            <Typography variant="paragraph-two-regular" color="white">
              {subtitle}
            </Typography>
          </Box>
          <Box
            bg="white"
            width={24}
            height={24}
            borderRadius={12}
            alignItems="center"
            justifyContent="center"
          >
            <Ionicons
              name="heart"
              color={isFavorite ? theme.colors.primary : theme.colors.secondary}
            />
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
}
