/**
* @Author: haiwang
* @Date:   2017-01-12 17:10:43
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-01-13 11:48:56
*/



import React from 'react';
import Nav from './nav';
import Header from './Header';
import '../public/css/app.scss';

class App extends React.Component {
    render() {

        return (
            <div className='App'>
                <Header>
                    <Nav />
                </Header>
                {this.props.children}
            </div>
        )
    }
}

export default App;
