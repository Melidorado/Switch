import {
    TextInput,
    View
} from 'react-native'

import React from 'react';
import { styles } from './style';

const Input = ({ handleOnChange, style, ...props}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                {...props}
                style={[style, styles.input]}
                onChangeText={handleOnChange}
            />
        </View>
    )
}

export default Input;