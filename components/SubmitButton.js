import React from 'react';
import AppButton from './AppButton';

import { useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';

function SubmitButton({title, bgcolor, style}) {
    

    const { handleSubmit } = useFormikContext();

    return (
        <AppButton title={title} BtnStyle={style} style={styles.button} bgcolor={bgcolor} onPress={handleSubmit}/>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
    }
})

export default SubmitButton;