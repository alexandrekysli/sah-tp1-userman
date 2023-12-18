import { View, Image } from "react-native";
import Styles from "./home.styles";

import { SweetButton } from "../basics/Buttons";
import Users from "./Users";
import User from "./User";

import { useSimpleNavigation } from "../../hooks/usuals";
import { useId, useState } from "react";
import Database from "../../usuals/sqlite";

/**
 * Home application view
 * by kYsLi
 */

export default function Home() {
    const [view, changeView] = useSimpleNavigation('users')
    const [userValue, setUserValue] = useState({ name: null, surname: null })

    const handleSaveButton = async () => {
        if(userValue.name && userValue.surname){
            const userId = view !== 'users' && view.split('#')[1]
            if(userId === '0'){
                // -> Save new user
                await Database.addUser(userValue.name, userValue.surname)
                changeView('users')
            }else{
                // -> Edit old user
                await Database.updateUserWithId(userId, userValue.name, userValue.surname)
                changeView('users')
            }
        }
    }

    const handleRemoveButton = async () => {
        const userId = view !== 'users' && view.split('#')[1]
        await Database.removeUserWithId(userId)
        changeView('users')
    }

    const handleUserNameChange = (e) => {
        setUserValue({...userValue, name:e})
    }

    const handleUserSurnameChange = (e) => {
        setUserValue({...userValue, surname:e})
    }

    return <View style={Styles.homeView}>
        <View style={Styles.appLabeledIconView}>
            <Image
                source={require('../../assets/img/app-icon-label-reverse.png')}
                resizeMode="contain"
                style={Styles.appLabeledIconImage}
            />
        </View>
        {
            view === 'users'
            && <Users changeView={changeView} />
            || <User
                    hash={view}
                    handleUserNameChange={handleUserNameChange}
                    handleUserSurnameChange={handleUserSurnameChange}
                />
        }
        <HomeActions
            actualView={view}
            changeView={changeView}
            handleSaveButton={handleSaveButton}
            handleRemoveButton={handleRemoveButton}
            setUserValue={setUserValue}
        />
    </View>
}

const HomeActions = ({actualView, changeView, handleSaveButton, handleRemoveButton, setUserValue}) => {
    const userId = actualView !== 'users' && actualView.split('#')[1]
    const handleBackToHomePress = () => {
        changeView('users')
        setUserValue({name: null, surname: null})
    }
    const handleNewUserPress = () => changeView('user#0')
    return <View style={Styles.homeActions}>
        {
            actualView === 'users'
            && <SweetButton icon='user-plus' label='Ajouter' handlePress={handleNewUserPress}/>
            || <SweetButton icon='save' label='Enregistrer' handlePress={handleSaveButton} />
        }
        {
            actualView !== 'users'
            && <View style={Styles.homeActionsRight}>
                {
                    userId !== '0'
                    && <SweetButton handlePress={handleRemoveButton} icon='trash' theme="red" spaced={true} />
                    || null
                }
                <SweetButton handlePress={handleBackToHomePress} icon='chevron-left' />
            </View>
            || null
        }
        
    </View>
}