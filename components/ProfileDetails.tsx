import { View, Text, Image, Alert, Linking} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import {IconProps} from '@expo/vector-icons/build/createIconSet'
import IconButton from '@/components/IconButton'

const ProfileDetails = () => {
  return (
    <View className='justify-center items-center'>
      <Image
        style={{height: 200, width: 200, borderRadius: 100, margin: 15}}
        source={require("@/assets/images/wall-e.png")}
      />

        <Text className='text-2xl font-bold'>Rafael Bravo</Text>
        <Text className='text-xl text-gray-400 font-bold'>Ingeniero en proceso</Text>
        <IconButton
            icon={
            <Ionicons name="logo-instagram" size={24} color="black" />
            }
            onPress={abrirInstagram}
        />
    </View>
  )
}
const abrirInstagram = () => {
    Linking.openURL('https://www.instagram.com/rafa.brav__/');
};

export default ProfileDetails