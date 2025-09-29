import React from 'react';
import { Image, Linking, View } from 'react-native';


import IconButton from '@/components/ui/IconButton';

import CustomText from './ui/CustomText';
import CustomIcon from './ui/CustomIcon';

const ProfileDetails = () => {
  return (
    <View className='justify-center items-center'>
      <View className='flex-row items-center justify-between w-full'>
        <CustomIcon iconName='menu-left' />
        <CustomIcon iconName='menu' />
      </View>
      <Image
        className='h-[130px] w-[130px] rounded-full m-[15px]'
        source={require("@/assets/images/Wall-e.png")}
      />

      <CustomText value={'Rafael Bravo'} variant={'title'}/>
      <CustomText value={'Ingeniero en proceso'} variant={'subtitle'}/>
      <View className='flex-row gap-2 m-5'>
        <IconButton iconName='logo-instagram' color="purple" presionar={abrirInstagram}/>
        <IconButton iconName='logo-github' color="orange" presionar={abrirGithub}/>
      </View>
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