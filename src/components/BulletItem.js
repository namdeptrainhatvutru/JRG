import { View, Text } from "react-native";

const BulletItem = ({ children,color }) => (
  <View style={{ flexDirection: "row", marginBottom: 4,justifyContent:'center',alignItems:'center' }}>
    <Text style={{ marginRight: 6,color:color,fontSize:19,fontWeight:'bold' }}>•</Text>
    <Text style={{ flex: 1,color:color,fontSize:12,fontWeight:'bold',fontStyle:'italic' }}>{children}</Text>
  </View>
);
export default BulletItem;