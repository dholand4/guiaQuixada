import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: ${({theme}) => theme.colors.background};
`;

export const Background = styled.Image`
flex: 1;
height: 2024px;
width: 580px;
left: 80px; 

`;

export const Footer  = styled.View`

border-radius: 10px;
height: 35%;
bottom: 100px;
width: 95%;
background-color: ${({theme}) => theme.colors.background};
align-items: center;
position: absolute;
padding: 20px;
align-items: center;
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
margin-top: 25px;
font-size: 14px;
text-align: center;
color: ${({theme}) => theme.colors.background_white};
`;

export const line = styled.View`
border: 0.8px;
width: 20%;
margin-top: -10px;
margin-bottom: 15px;
border-color: ${({theme}) => theme.colors.background_white};
background-color: ${({theme}) => theme.colors.background_white};
`;