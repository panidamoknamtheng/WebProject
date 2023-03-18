import React from 'react';
import { StatusBar } from 'expo-status-bar';


import {
    PageTitle,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';

const Welcome = ({ navigation }) => {
    
    return (
        <>
            <StatusBar style="light" />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/Cuc2.jpg')} />

                <WelcomeContainer>

                    <PageTitle welcome={true}>Welcome To Cuctus</PageTitle>
                    <SubTitle welcome={true}>Username</SubTitle>

                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/img/Cuc1.png')} />

                        <Line />
                        <StyledButton onPress={() => {navigation.navigate ('Login') }}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>


                    </StyledFormArea>

                </WelcomeContainer>
            </InnerContainer>
        </>

    );
}
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => { setHidePassword(!hidePassword); }}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};


export default Welcome;