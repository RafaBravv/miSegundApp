import { Text } from 'react-native'
import React from 'react'

interface CustomTextProps{
    value?: string;
    variant?: "normal"|"subtitle"|"title";
    color?:string;
}

const CustomText = ({value="hola", variant="normal", color}: CustomTextProps) => {
  return (
    <Text className={selectVariant(variant)+" "+color}>
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
        default:
            return "text-black font-normal"
    }
}