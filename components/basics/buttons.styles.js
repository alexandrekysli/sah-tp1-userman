import { StyleSheet } from "react-native";
import Styles from "../../usuals/styles";

/**
 * Styles for Buttons components
 * by kYsLi
 */

export default StyleSheet.create({
    sweetButtonBox: {
        height: 50,
        flexDirection: "row",
        backgroundColor: Styles.color.blue_light,
        borderRadius: 10,
        paddingLeft: "auto"
    },
    sweetButtonBoxRed: {
        height: 50,
        flexDirection: "row",
        backgroundColor: Styles.color.red_light,
        borderRadius: 10,
        paddingLeft: "auto"
    },
    sweetButtonIcon: {
        height: '100%',
        width: 50,
        lineHeight: 50,
        textAlign: "center",
        fontSize: 18,
        color: Styles.color.blue_bold
    },
    sweetButtonIconRed: {
        height: '100%',
        width: 50,
        lineHeight: 50,
        textAlign: "center",
        fontSize: 18,
        color: Styles.color.red_bold
    },
    sweetButtonLabel: {
        flexDirection: 'row',
        height: '100%',
        lineHeight: 50,
        paddingRight: 20,
        width: 100,
        textAlign: "center",
        color: Styles.color.blue_bold
    },
    sweetButtonLabelRed: {
        flexDirection: 'row',
        height: '100%',
        lineHeight: 50,
        paddingRight: 20,
        width: 100,
        textAlign: "center",
        color: Styles.color.red_bold
    }
})