import React from 'react';
import { Image, Linking, View } from 'react-native';


import IconButton from '@/components/ui/IconButton';

import CustomText from './ui/CustomText';

const ProfileDetails = () => {
  return (
    <View className='justify-center items-center'>
      <Image
        className='h-[150] w-[150] rounded-[75] m-[50px] mb-[15px]'
        source={require("@/assets/images/wall-e.png")}
      />

      <CustomText value={'Rafael Bravo'} variant={'title'}/>
      <CustomText value={'Ingeniero en proceso'} variant={'subtitle'}/>
      <View className='flex-row gap-2 m-5 mb-10'>
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