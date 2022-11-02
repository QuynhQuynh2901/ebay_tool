import { Button, Dropdown, Input, Menu, MenuProps, message, Switch } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import styles from '../styles/index.module.scss'
import Products from "./Products";

export function SearchProduct() {
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
        <div className={styles["container-products"]}>
            <Input
                className={styles['btn-search-dropdown']}
                placeholder="Item ID or title or buyer or..."
                suffix={
                    <SearchOutlined />
                } />
            <Dropdown overlay={menu}  className={styles['btn-search-dropdown']}>
                <Button style={{width: '100%' }}>dropdown &ensp;<DownOutlined />
                </Button>
            </Dropdown>
            <Dropdown overlay={menu} className={styles['btn-search-dropdown']}>
                <Button style={{width: '100%'}}>dropdown &ensp;<DownOutlined />
                </Button>
            </Dropdown>
            <Products></Products>
            <Switch defaultChecked={false} onChange={(checked: boolean)=>console.log(`switch to ${checked}`)}/> 
            <span className={styles['label-switch']}>Sắp xếp theo thứ tự mới nhất</span>
            
        </div>
    )
}
 
export default SearchProduct