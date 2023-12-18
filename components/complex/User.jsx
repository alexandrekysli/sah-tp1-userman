import { View, Text, Image } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { SweetInput } from "../basics/Inputs"
import Styles from "./user.styles"

/**
 * User application view
 * by kYsLi
 */

export default function Users({hash, handleUserNameChange, handleUserSurnameChange}){
    const id = hash.split('#')
    return <View style={Styles.usersView}>
        <View style={Styles.globalLabel}>
            <FontAwesome5 style={Styles.globalLabelIcon} name={id[1] === '0' && 'user-plus' || 'user-edit'} />
            <Text style={Styles.globalLabelText}>{id[1] === '0' && `Ajout Utilisateur` || `Modification Utilisateur`}</Text>
        </View>
        <View>
            <SweetInput icon='info-circle' placeholder='Entrez le nom' onChange={handleUserNameChange} value={id[2]} />
            <SweetInput icon='info-circle' placeholder='Entrez le prenom' onChange={handleUserSurnameChange} value={id[3]} />
        </View>
    </View>
}