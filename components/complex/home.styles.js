import { StyleSheet } from "react-native";
import Styles from "../../usuals/styles";

/**
 * Styles for Home view
 * by kYsLi
 */

export default StyleSheet.create({
    homeView: {
        flex: 1,
        marginTop: 35,
        padding: 15,
    },
    text: {
        color: Styles.color.blue_bold
    },
    appLabeledIconView:{
        height: 200,
        justifyContent: "center"
    },
    appLabeledIconImage: {
        height: 150,
        width: "auto"
    },
    homeActions: {
        flexDirection: "row",
        height: 50,
        marginTop: 10,
        justifyContent: "space-between",
        alignItems: 'center'
    },
    homeActionsRight: {
        flexDirection: "row",
        width: 110,
        justifyContent: "flex-end"
    },
})