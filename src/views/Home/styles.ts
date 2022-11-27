import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
align-items: center;
background-color: ${({theme}) => theme.colors.background_white};
`;

export const ContainerSlider = styled.View`
height: 35%;
width: 100%;
background-color: black;
align-items: center;
padding: 20px;
`;

export const Footer = styled.View`
border-radius: 25px;
height: 35%;
width: 100%;
background-color: ${({theme}) => theme.colors.background};
align-items: center;
padding: 20px;
`;
