import { FlatList, Image } from "react-native";
import { Box } from "../../atoms";
import { Typography } from "../../atoms/Typography";

export function PopularCategoriesUI({ data }) {
  return (
    <Box mt="l" pl="m" gap="m">
      <Typography variant="paragraph-one-bold">Popular Categories</Typography>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {data.map((item) => (
          <Box alignItems="center" justifyContent="center" mr="xl" gap="s">
            <Image
              source={{ uri: item.imageUri }}
              resizeMode="cover"
              borderRadius={24}
              width={48}
              height={48}
            />
            <Typography variant="paragraph-two-semibold" color="secondary">
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
