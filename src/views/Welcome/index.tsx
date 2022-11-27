import { useNavigation } from '@react-navigation/native';
import React from 'react';
import logo from '../../assets/imgs/galinha.png'
import { Button } from '../../components/Button';
import { ButtonEmpty } from '../../components/ButtonEmpty';
import * as S from './styles'; 


export function Welcome() {
    const {navigate} = useNavigation();

    function handleNavigation() {
        navigate('Home')
    }
    
    return <S.Container>
        <S.Background source={logo} />
        <S.Footer>
        <S.line />
                <S.Title>Bem Vindo</S.Title>
                <S.subTitle>Aqui você encontra os melhores lugares de Quixadá. 
                Pontos turísticos, lojas, hotéis e tudo mais! ;)</S.subTitle>
            <ButtonEmpty title='Entrar' onPress={handleNavigation} ></ButtonEmpty>
            <S.CotainerButton>
                <Button title='Parceiros'></Button>
                <Button title='Compartilhar'></Button>
            </S.CotainerButton>

        </S.Footer>





</S.Container>


}