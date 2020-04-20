import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <div></div>
      <div style={{ display: 'flex' }}>
        <img
          alt='bell'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlCf15RgK96nGEuSSbWrCDgWl-LEFXfj3qWjoZz2Am2GW1KTvf&usqp=CAU'
          style={{ width: 18, height: 20, marginTop: '8%' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <p style={{ fontSize: 14, margin: 0, fontWeight: 'bold' }}>
            Super Admin
          </p>
          <p style={{ fontSize: 10, textAlign: 'right', margin: 0 }}>
            Super Admin
          </p>
        </div>
        <img
          alt='person'
          src='https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image'
          style={{ width: 40, height: 40, marginTop: '3%' }}
        />
      </div>
    </div>
  );
};

export default Header;
