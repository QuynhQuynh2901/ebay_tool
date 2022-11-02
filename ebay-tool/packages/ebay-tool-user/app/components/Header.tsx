import styles from '../styles/index.module.scss'
import { Layout, Input, Badge, Space, Dropdown, Button, Menu, message } from 'antd';
import { MenuOutlined, BellFilled, DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export function Header() {
  const { Header } = Layout;
  const handleMenuClick: MenuProps['onClick'] = e => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '1st menu item',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: '2nd menu item',
          key: '2',
          icon: <UserOutlined />,
        },
        {
          label: '3rd menu item',
          key: '3',
          icon: <UserOutlined />,
        },
      ]}
    />
  );

  return (

    <Header className={styles.header} color={'blue'}>
      <Space size={'large'} className={styles.logo} >
        <MenuOutlined style={{ color: "white" }} />
        <div className={styles.name}>
          Ebay-tool &nbsp;
          <span>ver 0.0.1</span>
        </div>
      </Space>
      <div style={{ width: "30%" }}>
        <Input placeholder="Search" size="large" className={styles['input-search']} />
      </div>
      <Space size={'large'} className={styles.setting} style={{ width: "30%", justifyContent: "flex-end" }}>
        <div>
          <Badge count={5} color="pink" size='small' offset={[5, 20]}>
            <BellFilled  style={{color: "white", fontSize: 20}}/>
          </Badge>
       </div>
        <div style={{color: 'white'}}>Item1</div>
        <div style={{color: 'white'}}>Item2</div>
        <Dropdown overlay={menu}>
          <Button className={styles['btn-header-dropdown']}>dropdown &ensp;<DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    </Header>


  )
}

export default Header
