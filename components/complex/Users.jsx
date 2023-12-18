import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"
import Styles from "./users.styles";
import { useState } from "react";
import { useDbUsers } from "../../hooks/usuals";

/**
 * Users application view
 * by kYsLi
 */

export default function Users({changeView}){
    const userList = useDbUsers()

    return <ScrollView style={Styles.usersView}>
        {
            userList.map((user, index) => <UserItem
                id={user.id}
                handlePress={changeView}
                name={user.name}
                surname={user.surname}
                key={index}
            />)
        }
    </ScrollView>
}

const UserItem = ({id, name, surname, handlePress}) => {
    const [state, setState] = useState(false)

    const handleLongPress = () => {
        setState((x) => !x)
        handleTopLongPress({id: id, state: state})
    }

    return <TouchableOpacity style={state && Styles.userItemSelect || Styles.userItem} onPress={() => handlePress(`user#${id}#${name}#${surname}`)}>
        <FontAwesome5 name='user' style={Styles.userItemIcon} />
        <View style={Styles.userItemNamesView}>
            <Text style={Styles.userItemNamesViewPure}>{name}</Text>
            <Text style={Styles.userItemNamesViewSimple}>{surname}</Text>
        </View>
    </TouchableOpacity>
}