import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState } from "react";

export default function TabOneScreen() {
  const [selected, setSelected] = useState("2026-03-25");

  const items: Record<string, { name: string }[]> = {
    "2026-03-25": [{ name: "Event 1" }],
    "2026-03-26": [{ name: "Event 2" }],
    "2026-03-27": [],
  };

  const selectedItems = items[selected] || [];

  return (
    <View style={styles.container}>
      <Calendar
        current={selected}
        onDayPress={(day) => setSelected(day.dateString)}
        markedDates={{
          [selected]: {
            selected: true,
            selectedColor: "blue",
          },
        }}
      />

      <View style={styles.listContainer}>
        {selectedItems.length > 0 ? (
          selectedItems.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          ))
        ) : (
          <Text>일정 없음</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
});
