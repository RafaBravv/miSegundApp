import { View, Text, Image} from 'react-native'
import React from 'react'

const ProfileDetails = () => {
  return (
    <View className='justify-center items-center'>
      <Image
        style={{height: 200, width: 200, borderRadius: 100}}
        source={require("@/assets/images/wall-e.png")}
      />

        <Text className='font-bold'>Rafael Bravo</Text>
        <Text className='text-gray-400 font-bold'>Yo</Text>
    </View>
  )
}

export default ProfileDetails