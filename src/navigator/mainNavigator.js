import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen015370Navigator from '../features/BlankScreen015370/navigator';
import BlankScreen015368Navigator from '../features/BlankScreen015368/navigator';
import BlankScreen015367Navigator from '../features/BlankScreen015367/navigator';
import BlankScreen015362Navigator from '../features/BlankScreen015362/navigator';
import BlankScreen115361Navigator from '../features/BlankScreen115361/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen015370: { screen: BlankScreen015370Navigator },
BlankScreen015368: { screen: BlankScreen015368Navigator },
BlankScreen015367: { screen: BlankScreen015367Navigator },
BlankScreen015362: { screen: BlankScreen015362Navigator },
BlankScreen115361: { screen: BlankScreen115361Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
