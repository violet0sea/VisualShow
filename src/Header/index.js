/**
* @Author: haiwang
* @Date:   2017-01-12 17:26:15
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-01-13 11:53:46
*/



import React from 'react';

class Header extends React.Component {
    constructor(props) {

        super(props);

    }
    render() {

        return (
            <div className='Header'>
                <div className='pageName'>
                    <span>Visual</span>
                </div>
                {this.props.children}
            </div>
        );

    }
}

export default Header;
