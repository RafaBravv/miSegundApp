import { Text, View } from "react-native";
import ProfileDetails from "@/components/ProfileDetails";
import ProfileInfo from "@/components/ProfileInfo";
import "../global.css"

export default function Index() {
  return (
    <View className="flex-1 bg-white justify-start items-center">
      <ProfileDetails/>
      <ProfileInfo/>
    </View>
  );
}
