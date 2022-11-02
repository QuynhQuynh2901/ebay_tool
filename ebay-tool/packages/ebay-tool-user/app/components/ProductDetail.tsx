
import styles from '../styles/index.module.scss'
import { EditOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import { Image, Descriptions } from 'antd';

const ProductDetail = () => {
    return (
        <div className={styles["product-detail"]}>
            <div className={styles["list-action"]}>
                <EditOutlined className={styles["product-detail-action"]}/>
                <MedicineBoxOutlined className={styles["product-detail-action"]}/>
            </div>
            <div className={styles['img-product']}>
                <Image
                    alt='product'
                    style={{ width: "100%" }}
                    src="https://hotgirlshop.vn/Uploads/Products/21072021/News/20721610-giay-the-thao-nu-nike-cao-cap-chinh-hang.jpg"
                />
            </div>
            <Descriptions  layout="vertical" size='small' column={1} labelStyle={{
                fontSize: '1rem',
                fontWeight: '600',
                textTransform: 'uppercase'
            }}
                contentStyle={{
                    color: 'gray'
                }}
            >
                <Descriptions.Item label="id" >1234567689809</Descriptions.Item>
                <Descriptions.Item label="Tên sản phẩm">Giày Nike Air Force 1 trắng</Descriptions.Item>
                <Descriptions.Item label="kho">aasssnnnxjapan</Descriptions.Item>
                <Descriptions.Item label="giá">133.5</Descriptions.Item>
                <Descriptions.Item label="SKU">N0007</Descriptions.Item>
            </Descriptions>


        </div>
    )
}
export default ProductDetail