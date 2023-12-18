import { TextInput, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import Styles from "./inputs.styles"

/**
 * Application Input Elements
 * by kYsLi
 */

const SweetInput = ({icon, placeholder, onChange, value}) => {
    return <View style={Styles.sweetInput}>
        <FontAwesome5 name={icon} style={Styles.sweetInputIcon} />
        <TextInput
            onChangeText={onChange}
            placeholder={placeholder}
            style={Styles.sweetInputBox}
            placeholderTextColor='#4b787d'
            defaultValue={value}
        />
    </View>
}

export {SweetInput}