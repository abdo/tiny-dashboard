import React from 'react';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import Profile from '../../pages/Profile';
import Help from '../../pages/Help';

const Layout = ({ displayedPage }) => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideMenu />
        <div style={{ paddingTop: 50, paddingLeft: 30, width: '100%' }}>
          {displayedPage === 'profile' ? <Profile /> : <Help />}
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  displayedPage: state.main.displayedPage,
});

export default connect(mapStateToProps)(Layout);
