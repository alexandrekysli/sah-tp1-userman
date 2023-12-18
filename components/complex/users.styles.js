import { StyleSheet } from "react-native";
import Styles from "../../usuals/styles";

/**
 * Styles for Users view
 * by kYsLi
 */

export default StyleSheet.create({
    usersView: {
        flex: 1
    },
    userItem: {
        backgroundColor: Styles.color.grey_light,
        marginBottom: 2,
        flexDirection: 'row',
        height: 60,
        borderRadius: 10
    },
    userItemSelect: {
        backgroundColor: Styles.color.red_light,
        marginBottom: 2,
        flexDirection: 'row',
        height: 60,
        borderRadius: 10
    },
    userItemIcon: {
        height: 60,
        width: 60,
        lineHeight: 60,
        fontSize: 25,
        textAlign: "center",
        color: Styles.color.blue_bold
    },
    userItemNamesView: {
        width: '100%',
        justifyContent: "center"
    },
    userItemNamesViewPure: {
        fontSize: 18,
        color: Styles.color.blue_bold
    },
    userItemNamesViewSimple: {
        color: Styles.color.blue_bold
    }
})