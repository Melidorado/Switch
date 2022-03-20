import { Alert, Button, Text, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import Card from '../../components/Card'
import Header from '../../components/header'
import { styles } from './style'

const GameScreen = ({ userOptions, onGameOver }) => {
    
    const generateRandomBetween = useCallback((min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        }
        else return rndNum;
    }, [currentHigh, currentLow, currentGuess, userOptions])

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOptions))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if(currentGuess === userOptions) onGameOver(rounds)
    }, [currentGuess, userOptions, onGameOver])

    const handlerNextGuess = (direction) => {
        if(
            (direction === 'lower' && currentGuess < userOptions) ||
            (direction === 'greater' && currentGuess > userOptions)
        ) {
            Alert.alert('No mientas...', 'tu sabes que no es verdad', [{text: '¡Disculpa!'}, {text: 'Cancelar'}])
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(current => current +1)
    }

    return (
        <View style={styles.container}>
            <Header title='Juego Iniciado' />
            <Card style={styles.cardContainer}>
                <Text style={styles.cardTitle}>La suposición del oponentes</Text>
                <Text style={styles.confirmedText}>{currentGuess}</Text>
                <View style={styles.buttonsContainer}>
                    <Button title='Menor' onPress={() => handlerNextGuess('lower')} color='#52528C'/>
                    <Button title='Mayor' onPress={() => handlerNextGuess('greater')} color='#52528C'/>
                </View>            
            </Card>
        </View>
    )
} 

export default GameScreen;