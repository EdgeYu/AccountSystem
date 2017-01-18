import React, {Component} from 'react';
import {Menu} from 'antd';
import NavLink from '../NavLink/NavLink';
import {header, menuList, menuItem, activeItem} from './index.css';

const menus = [
    ['index', '/', '首页'],
    ['orders', '/orders', '订单'],
    ['storage', '/storage', '入库'],
    ['stock', '/stock', '仓库'],
    ['funds', '/funds', '资金'],
    ['manage', '/manage', '管理'],
];

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            activeIndex: nextProps.activeIndex
        });
    }

    render(){
        return (
            <div className={header}>
                <ul className={menuList}>
                    {
                        menus.map(([key, path, text],index)=>
                            (
                                <li key={key} className={this.state.activeIndex==index? activeItem : menuItem}>
                                    <NavLink target={path} linkText={text}/>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }

}