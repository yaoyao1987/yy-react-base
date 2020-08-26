import { FC, CSSProperties } from 'react';
export declare type SpinSize = 'default' | 'small' | 'large';
export interface SpinProps {
    /** 组件样式名 */
    className?: string;
    /** 是否为加载中状态 */
    spinning?: boolean;
    style?: CSSProperties;
    /** 组件大小，可选值为 small default large */
    size?: SpinSize;
}
export declare const Spin: FC<SpinProps>;
export default Spin;
