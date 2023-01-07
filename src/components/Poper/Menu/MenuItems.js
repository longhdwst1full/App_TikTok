import Button from "~/components/Button";
import classnames from 'classnames/bind';
import styles from './menu.module.scss';

const cx = classnames.bind(styles);

export default function MenuItems({ data }) {
    console.log(data);
    return (
        <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>)
}
