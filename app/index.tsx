import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProfileDetails from "@/components/ProfileDetails";
import ProfileInfo from "@/components/ProfileInfo";
import "../global.css"

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <ProfileDetails/>
        <ProfileInfo/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
