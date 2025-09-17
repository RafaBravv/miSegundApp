import { View, Text, Pressable } from 'react-native'
import React from 'react'

const IconButton = () => {
  return (
    <View>
        <Pressable onPress={()=>console.log("Presionado")}>
            <Text>I'm pressable!</Text>
        </Pressable>
    </View>
  )
}

export default IconButton