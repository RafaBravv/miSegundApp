import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

import IconButton from '@/components/ui/IconButton';
import CustomText from './ui/CustomText';

const ProfileDetails = () => {
  return (
    <View className='justify-center items-center'>
      <Image
        style={{height: 200, width: 200, borderRadius: 100, margin: 15}}
        source={require("@/assets/images/wall-e.png")}
      />

      <CustomText value={'Rafael Bravo'} variant={'title'}/>
      <CustomText value={'Ingeniero en proceso'} variant={'subtitle'}/>
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