import Tippy from '@tippyjs/react/headless'
import React from 'react'
import classnames from 'classnames/bind';


import styles from "./menu.module.scss";
import { wrapper as PopperWrapper } from '~/components/Poper';
import MenuItems from './MenuItems';


const cx = classnames.bind(styles);

export default function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems data={item} key={index} />
        )
    }
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper classNames={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>

            )}
        >
            {children}
        </Tippy>
    )
}
