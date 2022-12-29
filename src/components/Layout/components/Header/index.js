import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss'


const cx = classNames.bind(styles);


// components dùng chung cho layout

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tt' />
            </div>
            <div className={cx('search')}>
                <input placeholder="Search accounts and videos " spellCheck={false} />
                <button>
                    {/* clear */}
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button>
                    {/* loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                </button>
                <button className={cx('search-btn')}>
                    {/* search */}
<FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx['actions']}>

            </div>
        </div>
    </header>
}

export default Header;