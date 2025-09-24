//Imports
import React, {ReactNode} from 'react'
import { Pressable} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

//Intefaces
interface IconButtonProps {
    presionar?: () => void;
    iconName: string; // Nombre del icono
    color?: string; // Color de icono (Opcional)
    // icon: ReactNode;
    // onPress: () => void;
} 

//Principal
const IconButton = ({iconName, presionar}: IconButtonProps) => {
    return (
        <Pressable onPress={presionar}>
            <Ionicons
                name={iconName as any}
                size={24}
                color="black"
            />
            {/* {icon} */}
        </Pressable>
    )
}

//Export
export default IconButton