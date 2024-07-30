import {DrawerNavigationProp} from '@react-navigation/drawer/src/types';

export type RootDrawerParamList = {
    Home: undefined;
    Profile: undefined
    Favorites: undefined
    CarConfig: undefined
    ClusterDetails: undefined
    Login: undefined
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> = DrawerNavigationProp<
    RootDrawerParamList,
    Screen
>;
