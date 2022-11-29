import { useNavigation } from '@react-navigation/native';
import React from 'react';
import logo from '../../assets/imgs/galinha.png'
import { Button } from '../../components/Button';
import * as S from './styles'; 


export function Welcome() {
    const {navigate} = useNavigation();

    function handleNavigation() {
        navigate('Home')
    }
    
    return <S.Container>
        <S.Content>
        <S.Footer>
                <S.Title>Bem Vindo</S.Title>
                <S.subTitle>Aqui você encontra os melhores lugares de Quixadá. 
                Pontos turísticos, lojas, hotéis e tudo mais! ;)</S.subTitle>
            <Button title='Entrar' onPress={handleNavigation} ></Button>


        </S.Footer>

        </S.Content>








</S.Container>


}