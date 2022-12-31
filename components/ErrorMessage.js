import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;
    return (

        <View>
            <Text style={styles.error}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
    }
})

export default ErrorMessage;