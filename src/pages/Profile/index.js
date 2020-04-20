import React from 'react';
import { Card, Checkbox, Select } from 'antd';
import { colors } from '../../style/constants';
const { Option } = Select;

const Profile = () => {
  return (
    <div style={{ width: '100%' }}>
      <h1>Profile</h1>
      <div style={{ display: 'flex' }}>
        <Card style={{ width: '60%' }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img
              alt='person'
              src='https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image'
              style={{ width: 100, height: 100, margin: 30 }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p style={{ margin: 0, color: '#c2c3c4', fontWeight: 'bold' }}>
                Full name
              </p>
              <p style={{ fontWeight: 'bold' }}>super admin</p>
            </div>
            <p style={{ fontWeight: 'bold', color: colors.blue }}>
              Edit Profile
            </p>
          </div>
          <p style={{ margin: 0, color: '#c2c3c4', fontWeight: 'bold' }}>
            Email
          </p>
          <p style={{ fontWeight: 'bold' }}>super@admin.com</p>
          <hr />
          <p style={{ fontWeight: 'bold', color: colors.blue }}>
            Change Password
          </p>
          <div style={{ display: 'flex' }}>
            <p
              style={{
                fontWeight: 'bold',
                color: colors.blue,
                marginRight: 20,
              }}
            >
              Select App Language
            </p>
            <Select defaultValue='english' style={{ width: 120 }}>
              <Option value='english'>English</Option>
              <Option value='chinese'>Chinese</Option>
            </Select>
          </div>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ fontWeight: 'bold', color: colors.blue }}>Logout</p>
            <div style={{ display: 'flex' }}>
              <Checkbox style={{ marginRight: 10 }} />
              <p style={{ fontWeight: 'bold' }}>Logout on all devices</p>
            </div>
          </div>
        </Card>
        <h2 style={{ marginLeft: 20 }}>Recent likes</h2>
      </div>
    </div>
  );
};

export default Profile;
