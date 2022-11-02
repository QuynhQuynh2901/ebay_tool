import { Tabs } from 'antd';
import styles from '../styles/index.module.scss'
import Buyer from './Buyer';
import ProductDetail from './ProductDetail';


const TabItemBuyer = () => {
    return (
        <Tabs defaultActiveKey="1" 
        centered={true}
        size='large'
      className={styles['tab-container']}
        >
            <Tabs.TabPane  tab="Item" key="1" className={styles['product-tabPane']} >
                <ProductDetail></ProductDetail>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Buyer" key="2" className={styles['product-tabPane']}>
                <Buyer></Buyer>
            </Tabs.TabPane>
           
        </Tabs>
    )
}
export default TabItemBuyer