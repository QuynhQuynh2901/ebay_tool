
// import Link from 'next/link'
import { Row, Col, Layout,  } from 'antd';
import ChatBox from '../app/components/ChatBox';
import { Header } from '../app/components/Header'
import SearchProduct from '../app/components/SearchProduct';
import TabItemBuyer from '../app/components/TabItemBuyer';
import {WechatOutlined} from '@ant-design/icons';
import styles from './index.module.scss'
import ListMessage from '../app/components/ListMessage';

export function Index() {
  // const { Footer } = Layout;

  return (
    <div>
    <Layout>
      <Header></Header>
      <Layout style={{backgroundColor: "white", padding: "0.5rem"}}>
        <Row>
          <Col span={4}>
            <SearchProduct></SearchProduct>
          </Col>
          <Col span={4}>
            <ListMessage></ListMessage>
          </Col>
          <Col span={11}>
            <ChatBox></ChatBox>
          </Col>
          <Col span={5}>
            <TabItemBuyer></TabItemBuyer>
          </Col>
          
        </Row>
        </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
    <div className={styles['btn-chat']}>
    <WechatOutlined style={{color: 'white', fontSize: '1.5rem'}} />
    </div>
    </div>
  )
}

export default Index
