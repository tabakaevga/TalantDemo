import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header } from './src/Header'
import { Profile } from './src/Profile'
import { Registration } from './src/Registration'
import { CurrentEvent } from './src/CurrentEvent'
import { Footer } from './src/Footer'
export default function App() {
  return (
    <View style={styles.container}>


      {/* Страница текущего эвента
         <CurrentEvent name={'505 Fest'} date={'24 Dec 2020'} time={'15:30'}
                    type={'offline'} city={'Tumen'} place={'Tumen TechPark'}/>
     */}

      {/* Страница выбора авторизации
        <Registration />
     */}


        <Header title={'Profile'}/>
        <Profile name={'Ivan Ivanov'} city={'Tymen'} age={'17'} rate={'4730'}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  }
})
