import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
align-items: center;
background-color: ${({theme}) => theme.colors.background_white};
`;

export const Content = styled.View`
    height: 50%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: black;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    ;
`;

export const Footer  = styled.View`
justify-content: center;
    align-items: center;
border-radius: 25px;
        height: 80%;
        background-color: ${({theme}) => theme.colors.background};
        padding: 20px;
        width: 95%;
        top: 300px;
        position: relative;
        
`;

export const CotainerButton = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between
`;

export const Title = styled.Text`
font-size: 32px;
font-weight: 500;
color: ${({theme}) => theme.colors.background_white};
`;

export const subTitle = styled.Text`
margin-bottom: 25px;
margin-top: 10px;
font-size: 14px;
text-align: center;
color: ${({theme}) => theme.colors.background_white};
`;