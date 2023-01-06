import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

export default function Button(
    { to, href, primary = false,
        text = false,rightIcon,
        rounded = false,
        className,leftIcon,
        outline = false, small = false,
        large = false, children, disabled,
        onClick, ...passProps
    }) {

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };
    // Remove event listner when btn is disable
    if (disabled) {

        Object.keys(disabled).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        [className]:className,
        large,
        text,
        disabled,rounded
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span> }

            <span className={cx('title')}>{children}</span>
            
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span> }

        </Comp>
    )
}
