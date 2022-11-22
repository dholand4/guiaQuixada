import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 49%;
    height: 50px;
background-color: ${({theme}) => theme.colors.background_trans};

    justify-content: center;
    align-items: center;
    border-radius: 7px;
    border: 0.4px;
    border-color: ${({theme}) => theme.colors.background_white};
    

`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.background_white};

`;