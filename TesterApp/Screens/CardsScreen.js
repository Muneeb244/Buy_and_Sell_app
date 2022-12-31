import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../../components/Card';

function CardsScreen(props) {
    return (
        <View style={styles.mainContainer}>
            <Card image={require('../assetsImage/jacket.jpg')} title="Red jacket or sale" price="$100"/>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        backgroundColor: '#F5F5F5',
        width: '100%',
        height: '100%',
        paddingVertical: 70,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        // alignItems: 'center',
    }
})
export default CardsScreen;