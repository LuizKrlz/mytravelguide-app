import { useState } from "react";
import { Box } from "../../atoms";
import { ButtonTab } from "./ButtonTab";

export function Tabs({ tabs }) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      my="m"
    >
      {tabs.map((tab, index) => (
        <ButtonTab
          isActive={currentTab === index}
          onPress={() => setCurrentTab(index)}
          key={`${index}-${tab.title}`}
          title={tab.title}
        />
      ))}
    </Box>
  );
}
