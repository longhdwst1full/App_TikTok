import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";





const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div  className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg" alt="fdf" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn văn a
                    <span> Nguyễn văn ja</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span  className={cx('username')}
                >
                    Nguyễn văn a
                </span>
            </div>
        </div>
    );
}

export default AccountItem;