import { TouchableOpacity, Text } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import Styles from "./buttons.styles"

/**
 * Application Button Components
 * by kYsLi
 */

/** Sweet Button type 1 */

const SweetButton = ({label, icon, theme='default', handlePress, spaced}) => {
    return <TouchableOpacity style={[Styles[`sweetButtonBox${theme === 'red' && 'Red' || ''}`], spaced ? {marginRight: 5} : {}]} onPress={handlePress}>
        { icon && <FontAwesome5 name={icon} style={Styles[`sweetButtonIcon${theme === 'red' && 'Red' || ''}`]} /> || null}
        { label && <Text style={Styles[`sweetButtonLabel${theme === 'red' && 'Red' || ''}`]}>{label}</Text> || null}
        
    </TouchableOpacity>
}

export { SweetButton }