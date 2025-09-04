import { View, Text } from "react-native";

const RatingBar = ({ label, value, max, color }) => {
  const percent = (value / max) * 100;
  return (
    <View style={{ flexDirection: "row", alignItems: "center"}}>
      <Text style={{ width: 20 }}>{label}</Text>
      <View style={{ flex: 1, height: 10, backgroundColor: "#eee", borderRadius: 5, marginHorizontal: 5 }}>
        <View
          style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};
export default RatingBar;