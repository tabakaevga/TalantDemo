import React from 'react'
import { View, StyleSheet, Text, Image  } from 'react-native'
import {Footer} from "./Footer";

export const Profile = props => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={{alignItems: "center", paddingTop:40}}>
                    <Image style={styles.avatar}
                           source={require('../img/avatar.png')}
                           style={{ width: 120, height: 120}}
                    />
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.bio}>{props.city}, Rus • {props.age} years</Text>
                    <Text style={styles.rate}> {props.rate} rate </Text>
                 </View>
                <View style={styles.subTitle}>
                    <Text style={styles.subTitleText} >Progress</Text>
                </View>

                <View style={styles.item}>
                    <View style={styles.itemText}>
                        <Text style={styles.itemTitle}>October Java Contest</Text>
                        <Text style={styles.itemResult}>I Place</Text>
                    </View>

                    <View style={styles.itemRate}>
                        <Text style={{color : "#14B571"}}>+132 </Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.itemText}>
                        <Text style={styles.itemTitle}>October Java Contest</Text>
                        <Text style={styles.itemResult}>I Place</Text>
                    </View>

                    <View style={styles.itemRate}>
                        <Text style={{color : "#14B571"}}>+132 </Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.itemText}>
                        <Text style={styles.itemTitle}>October Java Contest</Text>
                        <Text style={styles.itemResult}>I Place</Text>
                    </View>

                    <View style={styles.itemRate}>
                        <Text style={{color : "#14B571"}}>+132 </Text>
                    </View>
                </View>
            </View>

            <Footer />
        </View>

    )
}

const styles = StyleSheet.create ({

    container: {
        height: '100%',
        width: '100%',

    },
    profile:{
        height: 250,
        width: '100%',
        shadowColor: '#e6e6e6',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13
    },
    avatar:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 35,
        paddingTop:5,
        paddingBottom:5
    },
    bio: {
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 17,
        lineHeight: 21,
    },
    rate: {
        color: '#E15241'
    },
    subTitle: {
        height: 300,
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        lineHeight: 28,
        paddingTop: 15,
        paddingLeft:20,
        paddingBottom: 20
    },
    subTitleText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 24
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft: 20,
        paddingTop: 20
    },
    itemTitle:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 24
    },
    itemResult:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 14
    },
    itemText:{
        flex:0.9
    },
    itemRate: {
        flex: 0.2,
        justifyContent:'space-evenly',
        paddingBottom: 10
    }

})