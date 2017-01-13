/**
* @Author: haiwang
* @Date:   2017-01-12 17:26:15
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-01-13 11:23:04
*/



import React from 'react';
import { Link } from 'react-router';
import '../public/css/nav.scss';

const navData = [{
    name: '首页',
    value: 'home'
}, {
    name: '快速上手',
    value: 'quickStart'
}, {
    name: 'API',
    value: 'api'
}, {
    name: '示例',
    value: 'example'
}, {
    name: 'EN',
    value: 'english'
}];

class Nav extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            activeItem: 'home'
        };
        this.onClick = this.onClick.bind(this);

    }
    onClick(e) {

        const value = e.currentTarget.getAttribute('data-value');
        if(value !== this.state.activeItem) {

            this.setState({
                activeItem: value
            });

        }

    }
    renderItem(navData) {

        const state = this.state;
        const activeItem = state.activeItem;

        return navData.map(d => {

            return <li
                className={`navItem${d.value === activeItem ? ' active' : ''}`}
                key={d.value}
                data-value={d.value}
                onClick={this.onClick}>
                <Link to={d.value === 'home' ? '/' : `/${d.value}`}>
                    {d.name}
                </Link>
            </li>

        })
    }
    render() {

        return (
            <ul className='Nav' role='nav'>
                {this.renderItem(navData)}
            </ul>
        );

    }
}

export default Nav;
