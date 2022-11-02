import { Avatar, Button  } from 'antd'
import styles from '../styles/index.module.scss'
import {EllipsisOutlined} from '@ant-design/icons';


const Buyer = () => {
    return(
        <div className={styles["buyer"]}>
            <div  className={styles["buyer-avatar"]}>
            <Avatar 
           size={100}
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" />
            </div>
            <p style={{fontWeight: '600', textAlign: 'center'}}>MIMI29010000</p>
            <div className={styles['list-action-buyer']}>
                <Button shape="round" className={styles['btn-buyer']}>Assign</Button >
                <Button  shape="round" className={styles['btn-buyer']}><EllipsisOutlined /></Button >
            </div>
        </div>
    )
}
export default Buyer