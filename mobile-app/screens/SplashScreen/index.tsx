import React, {FC} from 'react';
import {Image, Animated} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import styled from 'styled-components';
import {theme} from '../../config/theme.config';

const SplashContainer = styled(Animated.View)`
  height: 100%;
  width: ${wp('100%')}px;
  position: absolute;
  z-index: 100;
  background: ${theme.palette.grey};
  align-items: center;
  justify-content: center;
`;

const SplashLogo = styled(Image)`
  width: ${wp('30%')}px;
  resize-mode: contain;
`;

const SplashScreen: FC = () => {
    return (
        <SplashContainer>
            <SplashLogo source={require('../../assets/images/splash-logo.png')}/>
        </SplashContainer>
    );
};

export default SplashScreen;
