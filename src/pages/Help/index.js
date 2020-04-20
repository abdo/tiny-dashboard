import React from 'react';
import { Card, Button } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;

const Help = () => {
  return (
    <Card style={{ textAlign: 'center' }}>
      <h1>Contact us</h1>
      <small style={{ fontWeight: 'bold' }}>Let us know how we can help</small>
      <TextArea
        placeholder='Let us know if you have any questions or suggestions, we could be more than happy to help you!'
        rows={4}
        style={{ marginTop: 20, marginBottom: 20 }}
      />
      <Button type='primary' style={{ width: 120 }}>
        SEND
      </Button>
    </Card>
  );
};

export default Help;
