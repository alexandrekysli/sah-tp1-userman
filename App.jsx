import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import Styles from "./usuals/styles";
import Home from "./components/complex/Home";

export default function App() {
  return <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor={Styles.color.blue_light} />
    <Home />
  </SafeAreaView>
}