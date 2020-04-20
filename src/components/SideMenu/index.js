import React from 'react';
import { colors } from '../../style/constants';
import { Menu, MenuItem, AppLogo, AppLogoContainer } from './style';
import appLogoImage from '../../assets/app_logo.png';

const SideMenu = () => {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      theme='dark'
      style={{ backgroundColor: colors.main }}
    >
      <AppLogoContainer>
        <AppLogo src={appLogoImage} />
      </AppLogoContainer>
      <MenuItem key='1'>Profile</MenuItem>
      <MenuItem key='2'>Help</MenuItem>
    </Menu>
  );
};

export default SideMenu;
