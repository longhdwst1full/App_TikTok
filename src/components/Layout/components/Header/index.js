import { useEffect, useState } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';


import images from '~/assets/images';
import styles from './Header.module.scss'
import { wrapper as PopperWrapper } from '~/components/Poper';
import AccountItem from '~/components/AccountItem';


const cx = classNames.bind(styles);


// components dùng chung cho layout

function Header() {
    const [searchResult, setSearchResult] = useState([])


    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tt' />
            </div>

            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>

                )}
            >
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
            </Tippy>
            <div className={cx('actions')}>

            </div>
        </div>
    </header>
}

export default Header;