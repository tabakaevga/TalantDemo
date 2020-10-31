import React from 'react'
import { View, StyleSheet, Text, Image  } from 'react-native'

export const Footer = props => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image
                       source={require('../img/events.png')}
                       style={{ width: 30, height: 30}}
                />
            </View>
            <View style={styles.item}>
                <Image
                    source={require('../img/messages.png')}
                    style={{ width: 30, height: 30}}
                />
            </View>
            <View style={styles.item}>
                <Image
                    source={require('../img/contest.png')}
                    style={{ width: 30, height: 30}}
                />
            </View>
            <View style={styles.item}>
                <Image
                    source={require('../img/profile.png')}
                    style={{ width: 30, height: 30}}
                />
            </View>

        </View>

    )
}



const styles = StyleSheet.create ({
    container: {
        width: '100%',
        flexDirection: "row",
        position: 'absolute',
        bottom:10
    },
    item: {
        flex: 0.25,
        paddingLeft: 30
    }

})