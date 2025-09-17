import React, {ReactNode} from 'react'
import { Pressable} from 'react-native'

interface IconButtonProps {
    icon: ReactNode;
    onPress: () => void;
} 

const IconButton = ({icon, onPress}: IconButtonProps) => {
    return (
        <Pressable onPress={onPress}>
            {icon}
        </Pressable>
    )
}

export default IconButton