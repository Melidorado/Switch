import { Button, Image, Text, View } from 'react-native'

import Card from '../../components/Card';
import React from 'react'
import { styles } from './styles';

const GameOverScreen = ({ rounds, choice, onRestart }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/game-over.png')} />
            <Card style={styles.cardContainer}>
                <Text style={styles.rounds}>Intentos: {rounds}</Text>
                <Text style={styles.choice}>¡{choice}!</Text>
            </Card>
            <Button title='Reiniciar' onPress={onRestart} />
        </View>
    )
}

export default GameOverScreen;