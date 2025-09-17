import { Text, View } from "react-native";
import ProfileDetails from "@/components/ProfileDetails";
import IconButton from "@/components/IconButton";
import "../global.css"

export default function Index() {
  return (
    <View className="flex-col bg-stone-200 w-screen-safe h-screen-safe justify-center items-center">
      <ProfileDetails></ProfileDetails>
      <IconButton></IconButton>
    </View>
  );
}
