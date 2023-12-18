import { StyleSheet } from "react-native";
import Styles from "../../usuals/styles";

/**
 * Styles for Inputs components
 * by kYsLi
 */

export default StyleSheet.create({
    sweetInput: {
        height: 50,
        flexDirection: "row",
        marginBottom: 10,
        paddingLeft: "auto",
        minWidth: '80%',
        backgroundColor: Styles.color.white_light
    },
    sweetInputIcon: {
        width: 50,
        height: 50,
        lineHeight: 50,
        fontSize: 18,
        textAlign: "center",
        color: Styles.color.blue_bold
    },
    sweetInputBox: {
        height: 50,
        lineHeight: 50,
        fontSize: 16,
        color: Styles.color.blue_bold
    }

})