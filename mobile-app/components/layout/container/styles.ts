import {View} from 'react-native';
import styled from 'styled-components';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {theme} from "../../../config/theme.config";

export const Wrapper = styled(View)`
  width: ${wp('90%')}px;
  margin: 0 auto;
  height: 100%;
`;

export const OuterContainer = styled(View)`
  overflow: hidden;
  background-color: ${theme.palette.background};
`;
