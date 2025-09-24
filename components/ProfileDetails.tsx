import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

import IconButton from '@/components/IconButton';

const ProfileDetails = () => {
  return (
    <View className='justify-center items-center'>
      <Image
        style={{height: 200, width: 200, borderRadius: 100, margin: 15}}
        source={require("@/assets/images/wall-e.png")}
      />

        <Text className='text-2xl font-bold'>Rafael Bravo</Text>
        <Text className='text-xl text-gray-400 font-bold'>Ingeniero en proceso</Text>
        <IconButton iconName='logo-instagram'></IconButton>
        <IconButton iconName='logo-github'></IconButton>

        {/* <View className='flex-row gap-5'>
        <IconButton
            icon={
            <Ionicons name="logo-instagram" size={24} color="black" />
            }
            onPress={abrirInstagram}
        />
        <IconButton
            icon={
              <AntDesign name="github" size={24} color="black" />
            }
            onPress={abrirGithub}
        />
        </View> */}
    </View>
  )
}
const abrirInstagram = () => {
    Linking.openURL('https://www.instagram.com/rafa.brav__/');
};
const abrirGithub = () => {
    Linking.openURL('https://github.com/RafaBravv');
};

export default ProfileDetails