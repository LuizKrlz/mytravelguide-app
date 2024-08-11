import { FlatList, Pressable } from "react-native";
import { Typography } from "../../atoms/Typography";
import { Box } from "../../atoms";

const filters = [
  {
    id: "1",
    title: "All",
    isActive: true,
  },
  {
    id: "2",
    title: "America",
    isActive: false,
  },
  {
    id: "3",
    title: "Europe",
    isActive: false,
  },
  {
    id: "4",
    title: "Oceania",
    isActive: false,
  },
];

function CountryButton({
  title,
  onPress,
  isActive,
}: {
  title: string;
  onPress(): void;
  isActive?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{ marginRight: 8, alignItems: "center", justifyContent: "center" }}
    >
      <Typography
        variant="paragraph-one-semibold"
        color={isActive ? "primary" : "secondary"}
      >
        {title}
      </Typography>

      <Box
        width={4}
        borderRadius={2}
        height={4}
        backgroundColor={isActive ? "primary" : "background"}
      />
    </Pressable>
  );
}

export function CountriesFilter() {
  return (
    <FlatList
      data={filters}
      horizontal
      keyExtractor={(item) => item.id}
      style={{
        paddingHorizontal: 16,
      }}
      renderItem={({ item }) => (
        <CountryButton
          onPress={() => {}}
          title={item.title}
          isActive={item.isActive}
        />
      )}
    />
  );
}
