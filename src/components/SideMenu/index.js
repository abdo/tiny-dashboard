import { connect } from 'react-redux';
import React from 'react';

import { colors } from '../../style/constants';
import { Menu, MenuItem, AppLogo, AppLogoContainer } from './style';
import * as mainActions from '../../store/main/actions';

import appLogoImage from '../../assets/app_logo.png';

const SideMenu = ({ goToProfile, goToHelp }) => {
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
      <MenuItem key='1' onClick={goToProfile}>
        Profile
      </MenuItem>
      <MenuItem key='2' onClick={goToHelp}>
        Help
      </MenuItem>
    </Menu>
  );
};

const mapDispatchToProps = {
  goToProfile: mainActions.goToProfile,
  goToHelp: mainActions.goToHelp,
};

export default connect(null, mapDispatchToProps)(SideMenu);
