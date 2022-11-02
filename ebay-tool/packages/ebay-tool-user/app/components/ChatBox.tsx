
import { Button, Input } from 'antd';
import styles from '../styles/index.module.scss'
import { FileAddOutlined, PaperClipOutlined } from '@ant-design/icons';

const ChatBox = () => {
    const { TextArea } = Input;
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    }
    return (
        <div className={styles['chatbox']}>
            <p className={styles['chatbox-title']}>text</p>
            <div className={styles['chat-box-content']}>khung chat</div>
            <p className={styles['chat-box-time']}> 2022-11-02T00:00:00.036Z text</p>
            <div className={styles['chatbox-input-container']}>
                <div className={styles['chatBox-textArea']}>
                    <TextArea showCount maxLength={200} style={{height:100}}  onChange={onChange} />
                </div>
                <div className={styles['chat-box-list-action']}>
                    <Button type="primary" className={styles['chat-box-btn-send']}>Gửi</Button>
                    <p>
                        <FileAddOutlined />
                        <span>Tải lên</span>
                    </p>
                    <p> 
                        <PaperClipOutlined />
                        <span>Đính kèm</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ChatBox