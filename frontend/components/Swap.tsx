/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from 'react'
import Curve from './Curve'
import {
  Button,
  Card,
  Descriptions,
  Divider,
  Drawer,
  InputNumber,
  Modal,
  notification,
  Row,
  Select,
  Space,
  Tooltip,
  Typography,
} from 'antd'
import { RetweetOutlined, SettingOutlined } from '@ant-design/icons'

const Swap: React.FC<{}> = () => {
  return (
    <Card
      title={
        <Space>
          <img
            src="https://ipfs.io/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
            width="40"
            alt="uniswapLogo"
          />
          <Typography>Uniswapper</Typography>
        </Space>
      }
      extra={
        <Button
          type="text"
          onClick={() => {
            //   setSettingsVisible(true);
          }}
        >
          <SettingOutlined />
        </Button>
      }
    >
      swap
    </Card>
  )
}

export default Swap
