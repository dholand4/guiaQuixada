import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`

    width: 100%;
    height: 50px;
background-color: ${({theme}) => theme.colors.background_white};

    justify-content: center;
    align-items: center;
    border-radius: 7px;
    margin: 10px;

`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.background};

`;