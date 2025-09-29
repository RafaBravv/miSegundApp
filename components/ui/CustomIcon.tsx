import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Fontisto, EvilIcons } from '@expo/vector-icons'

interface CustomIconProps {
    iconName: string; // Nombre del icono
    color?: string; // Color de icono (Opcional)
} 

const CustomIcon = ({iconName, color}: CustomIconProps) => {
  return (
    <View className='bg-white h-[60px] w-[60] rounded-[20] items-center justify-center'>
        { iconName == "robot" || iconName == "menu-left" || iconName == "menu" ? ( // Si el nombre del icono es "robot", usa MaterialCommunityIcons, de lo contrario, usa Fontisto
            <MaterialCommunityIcons
                name={iconName as any}
                size={40}
                color={color}
            />
        ) : (
            <Fontisto
                name={iconName as any}
                size={35}
                color={color}
            />
        )}
    </View>
  )
}

export default CustomIcon