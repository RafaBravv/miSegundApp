import { Text } from 'react-native'
import React from 'react'

interface CustomTextProps{
    value?: string;
    variant?: "normal"|"subtitle"|"title";
}

const CustomText = ({value="hola", variant="normal"}: CustomTextProps) => {
  return (
    <Text className={selectVariant(variant)}>
        {value}
    </Text>
  )
}

export default CustomText

function selectVariant(variant: string){
    switch (variant) {
        case "normal":
            return "text-black font-normal"
        case "subtitle":
            return "text-gray-400 font-normal text-xl font-bold"
        case "title":
            return "text-black font-bold text-2xl"
        case "purple":
            return "text-purple font-bold text-xl"
        default:
            return "text-black font-normal"
    }
}