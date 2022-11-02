import styles from '../styles/index.module.scss'
import {  DeleteFilled } from '@ant-design/icons';
import { Switch } from 'antd';

const Messages = () =>{
    return (
        <div className={styles['list-message']}>
            <div className={styles['message-center']}>
                <div className={styles.message}>
                    <span className={styles['message-customer-name']}>QuynhQuynh1</span>
                    <DeleteFilled className={styles['message-icon-delete']}/>
                </div>
                <div className={styles.message}>
                    <span className={styles['message-customer-name']}>QuynhQuynh2</span>
                    <DeleteFilled className={styles['message-icon-delete']}/>
                </div>
                <div className={styles.message}>
                    <span className={styles['message-customer-name']}>QuynhQuynh3</span>
                    <DeleteFilled className={styles['message-icon-delete']}/>
                </div>
            </div>
            <Switch defaultChecked={false} onChange={(checked: boolean)=>console.log(`switch to ${checked}`)}/> 
            <span className={styles['label-switch']}>Thứ tự mới nhất</span>
        </div>
    )
}
export default Messages