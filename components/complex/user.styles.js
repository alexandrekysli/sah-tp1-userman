import { StyleSheet } from "react-native";
import Styles from "../../usuals/styles";
/**
 * Styles for User view
 * by kYsLi
 */

export default StyleSheet.create({
    usersView: {
        backgroundColor: Styles.color.grey_light,
        alignItems: "center",
        flex: 1
    },
    globalLabel: {
        alignItems: "center",
        marginBottom: 10
    },
    globalLabelIcon: {
        fontSize: 25,
        height: 60,
        width: 60,
        lineHeight: 60,
        textAlign: "center",
        borderRadius: 50,
        color: Styles.color.blue_bold
    },
    globalLabelText: {
        color: Styles.color.blue_bold,
        width: 200,
        textAlign: "center"
    }
})