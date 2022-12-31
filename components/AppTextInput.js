import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppTextInput({name, size=20, ...otherProps}) {
    return (
        <View style={styles.container}>
            {name && <MaterialCommunityIcons 
                name={name}
                size={size}
                style={{marginRight: 7}}
            />}
            <TextInput
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        marginTop: 10
    }
})

export default AppTextInput;