/**
 * @author 舟烬
 * @description 导航栏
 */
import {
    DownOutlined,
    LoginOutlined,
    LogoutOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { Avatar, Dropdown, Menu, MenuProps } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import { NavLink } from 'react-router-dom'
import DarkToggle from '../DarkToggle'
import './index.less'

export class TopHeaderProps {}
const items: MenuProps['items'] = [
    {
        label: '登录',
        key: 'login',
        icon: <LoginOutlined />,
    },
    {
        label: '注册',
        key: 'register',
        icon: <LogoutOutlined />,
    },
]

const TopHeader: React.FC<TopHeaderProps> = (props) => {
    const controlMenu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.antgroup.com"
                        >
                            超级管理员
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'current' : ''
                            }
                        >
                            登录
                        </NavLink>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                isActive ? 'current' : ''
                            }
                        >
                            注册
                        </NavLink>
                    ),
                },
                {
                    key: '4',
                    label: (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.aliyun.com"
                        >
                            退出
                        </a>
                    ),
                    danger: true,
                    theme: 'light',
                },
            ]}
        />
    )
    let mobile = localStorage.getItem('userData')
    if (mobile) {
        mobile = JSON.parse(mobile).mobile
    }

    return (
        <Header className="top-header">
            <DarkToggle />
            <div className="welcome">
                <span style={{ marginRight: '15px' }}>欢迎回来，{mobile}</span>
                <Dropdown overlay={controlMenu}>
                    <Avatar size="large" icon={<UserOutlined />}>
                        <DownOutlined />
                    </Avatar>
                </Dropdown>
            </div>
        </Header>
    )
}

TopHeader.defaultProps = new TopHeaderProps()
export default TopHeader
