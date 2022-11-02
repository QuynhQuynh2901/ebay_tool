import { Typography } from "antd"
import styles from '../styles/index.module.scss'



const MessageSeller = () =>{
    return (
        <div className={styles['chat-box-message-seller']}>
          
            <div className={styles['chat-box-message-content-seller']}>
                <Typography.Text >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Typography.Text>
                <p className={styles['chat-box-message-time']}>2022-11-02 04:00:00</p>
            </div>
        </div>

    )
}
export default MessageSeller