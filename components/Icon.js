import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';


function Icon({name, size=40, backgroundcolor="#000", iconColor = "#fff"}) {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor: backgroundcolor,
            color: iconColor,
            borderRadius: size/2,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Icon;