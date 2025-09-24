import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import { Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import CustomText from './ui/CustomText'

const ProfileInfo = () => {
  return (
    <View className='flex-1 w-full'>
        <View className='flex-1 w-full bg-[#2c2c2c] justify-top items-center rounded-t-[40] p-[20]'>
            <CustomText value={'Habilidades'} variant={'subtitle'} color='text-[#ffa500]'/>
            <View className='flex-row gap-3 m-5 bg-white h-[60px] w-[300] rounded-[30] items-center justify-center'>
                <Fontisto name="adobe" size={40} color="orange" />
                <MaterialCommunityIcons name="robot" size={40} color="black" />
                <Fontisto name="camera" size={40} color="brown" />
                <Fontisto name="code" size={40} color="blue" />
            </View>
            <CustomText value={'Profesión'} variant={'subtitle'} color='text-[#ffa500]'/>
            <CustomText value={'Estudiante'} variant={'normal'} color='text-white'/>
        </View>
    </View>
  )
}

export default ProfileInfo