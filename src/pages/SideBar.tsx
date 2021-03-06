import * as React from 'react';
import {SideItem} from '@Components/SideItem';
import SideBarItems from '@/config/sidebar.config';
import Menu from 'antd/es/menu';
import Popover from 'antd/es/popover';
import Button from 'antd/es/button';
import Icon from 'antd/es/icon';

const contactUsStr = "扫描二维码, 添加机器人为好友, 发送对应城市名: \"上海\", 即可进群";
const imgWidth = {width: 200};
const imgHeight = {height: 320};
const imgSize = Object.assign({}, imgWidth, imgHeight);

const wechatPopover = (
    <div style={imgWidth}>
        <p>{contactUsStr}</p>
        <img src="/static/imgs/fcc-assistant.png" alt=""
             style={imgSize}/>
    </div>
);

const NavBar = (<Menu className="sha-main-nav-phone" mode="inline" theme="light" defaultSelectedKeys={["0"]}>
    {SideBarItems.map((v, i) => <SideItem title={v.title} icon={v.icon} to={v.to} key={i}/>)}
</Menu>);

export default () => (
    <div>
        <img className="sha-main-logo" src="/static/imgs/EastPerl.svg" alt="EastPerl"/>
        <h2 className="sha-img-legend">FCC Shanghai</h2>
        <Popover content={NavBar} trigger="click">
            <Button className="sha-toggle-nav" type="primary">
                <Icon type='menu-unfold'/>
            </Button>
        </Popover>
        <Menu className="sha-main-nav" mode="inline" theme="light" defaultSelectedKeys={["0"]}>
            {SideBarItems.map((v, i) => <SideItem title={v.title} icon={v.icon} to={v.to} key={i}/>)}
        </Menu>
        <div className="sha-social">
            <h3 className="sha-social-legend">Join Us</h3>
            <p className="sha-social-icons">
                <a href="https://github.com/FCC-Shanghai" target="_blank" rel="noopener noreferrer">
                    <img src="/static/imgs/github.svg" alt="" className="sha-social-icon"/>
                </a>
                <a href="//shang.qq.com/wpa/qunwpa?idkey=cd476c93cb4faf805ba36b1be3a0daf0359d31628b14f654fc7a086dd911d05a"
                   target="_blank" rel="noopener noreferrer">
                    <img src="/static/imgs/qq.svg" alt="" className="sha-social-icon"/>
                </a>
                <Popover content={wechatPopover}>
                    <a target="_blank" rel="noopener noreferrer">
                        <img src="/static/imgs/wechat.svg" alt="WeChat" className="sha-social-icon"/>
                    </a>
                </Popover>
            </p>
        </div>

    </div>
)