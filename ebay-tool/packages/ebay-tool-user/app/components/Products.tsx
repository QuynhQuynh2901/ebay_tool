import { Badge, Image } from 'antd'
import {  DeleteFilled } from '@ant-design/icons';
import styles from '../styles/index.module.scss'


const Products = () =>{
    return (
        <div className={styles["list-product"]}>
            <Badge count={1} color={"green"}>
            <div className={styles["product"]}>
            <div className={styles["state-product"]}>
                sold
            </div>
            <p className={styles["product-id"]}>ItemID: 1234567890</p>
           
            <div className={styles["product-container"]}>
                <div >
                <Image
                    alt='product'
                    style={{width: "100%"}}
                    src="https://hotgirlshop.vn/Uploads/Products/21072021/News/20721610-giay-the-thao-nu-nike-cao-cap-chinh-hang.jpg"
  />
                </div>
                <p >Giày Nike Air Force 1 trắng</p>
              
                <DeleteFilled className={styles['product-icon-delete']}/>
            </div>
            </div>
            </Badge>

            <Badge count={1} color={"green"}>
            <div className={styles["product"]}>
            <div className={styles["state-product"]}>
                sold
            </div>
            <p className={styles["product-id"]}>ItemID: 1234567890</p>
            {/* <p>icon thung rac</p> */}
            <div className={styles["product-container"]}>
                <div >
                <Image
                    alt='product'
                    style={{width: "100%"}}
                    src="https://hotgirlshop.vn/Uploads/Products/21072021/News/20721610-giay-the-thao-nu-nike-cao-cap-chinh-hang.jpg"
  />
                </div>
                <p>Giày Nike Air Force 1 trắng</p>
                <DeleteFilled className={styles['product-icon-delete']}/>
            </div>
            </div>
            </Badge>
            
            <Badge count={1} color={"green"}>
            <div className={styles["product"]}>
            <div className={styles["state-product"]}>
                sold
            </div>
            <p className={styles["product-id"]}>ItemID: 1234567890</p>
            {/* <p>icon thung rac</p> */}
            <div className={styles["product-container"]}>
                <div >
                <Image
                    alt='product'
                    style={{width: "100%"}}
                    src="https://hotgirlshop.vn/Uploads/Products/21072021/News/20721610-giay-the-thao-nu-nike-cao-cap-chinh-hang.jpg"
  />
                </div>
                <p>Giày Nike Air Force 1 trắng</p>
                <DeleteFilled className={styles['product-icon-delete']}/>
            </div>
            </div>
            </Badge>
        </div>
    )
}
export default Products