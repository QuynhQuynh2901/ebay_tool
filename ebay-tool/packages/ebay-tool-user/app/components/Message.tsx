import { Avatar, Typography } from "antd"
import styles from '../styles/index.module.scss'



const Message = () =>{
    return (
        <div className={styles['chat-box-message-customer']}>
            <div>
                <Avatar size="default" src={"https://cdn.chanhtuoi.com/uploads/2022/01/hinh-avatar-nam-deo-kinh.jpg"}> </Avatar>
            </div>
            <div className={styles['chat-box-message-content']}>
                <Typography.Text >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Typography.Text>
                <p className={styles['chat-box-message-time']}>2022-11-02 04:00:00</p>
            </div>
        </div>

    )
}
export default Message