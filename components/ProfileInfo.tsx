import { View } from 'react-native'
import React from 'react'

import CustomText from './ui/CustomText'
import CustomIcon from './ui/CustomIcon'

const ProfileInfo = () => {
  return (
    <View className="flex-1 w-full bg-[#2c2c2c] justify-start items-start rounded-t-[40] p-[25]">
      <CustomText value={'Habilidades'} variant={'subtitle'} color='text-[#ffa500]'/>
      <View className='flex-row gap-4 m-5 h-[80px] w-max items-center justify-center'>
        <CustomIcon iconName='adobe' color="black"/>
        <CustomIcon iconName='robot' color="#33CCFF"/>
        <CustomIcon iconName='camera' color="black"/>
        <CustomIcon iconName='code' color="#33CCFF"/>
      </View>

      <CustomText value={'Profesión'} variant={'subtitle'} color='text-[#ffa500]'/>
      <View className='m-2 h-[40] w-full'>
        <CustomText value={'Estudiante'} variant={'normal'} color='text-white'/>
        <View className='h-[1px] w-full bg-gray-500 mt-2'/>
      </View> 

      <CustomText value={'Experiencia'} variant={'subtitle'} color='text-[#ffa500]'/>
      <View className='flex-row gap-2 h-full'>
        <View className='ml-10 mt-5 h-full w-1 bg-gray-500 rounded-full'/>
        <View className='ml-10 mt-5 p-5 h-[80] w-[240] bg-[#222] justify-top rounded-[20]'>
          <CustomText value={'Diseñador del afiche "Marcha de la fe 2025"'} variant={'normal'} color='text-white'/>
          <CustomText value={'Pasantías en el colegio'} variant={'description'}/>
        </View> 
      </View>
    </View>
  )
}

export default ProfileInfo