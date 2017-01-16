/**
* @Author: haiwang
* @Date:   2017-01-13 14:01:42
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-01-16 14:48:17
*/



import React from 'react';
import { browserHistory } from 'react-router';
import './index.scss';


class Slide extends React.Component {
    constructor(props) {

        super(props);
        this.changePage = this.changePage.bind(this);
        this.goToStart = this.goToStart.bind(this);
        this.pageId = 0;
    }
    componentDidMount() {

        const pageArr = document.querySelectorAll('.listPoint');
        pageArr[this.pageId].style.backgroundColor = 'cyan';

    }
    changePage(e) {

        if(e.target.className !== 'listPoint') {

            return;

        }

        const page = e.target.getAttribute('data-value');
        const pageArr = document.querySelectorAll('.pageview');
        document.body.scrollTop = page * 1080;

    }
    goToStart() {

        browserHistory.replace('/quickStart');
        const quickStart = document.querySelector('.navItem[data-value="quickStart"]');
        quickStart.click();

    }
    render() {

        return (
            <div className='Slide'>
                <div className='list' onClick={this.changePage}>
                    <div className='listPoint' data-value='0'></div>
                    <div className='listPoint' data-value='1'></div>
                    <div className='listPoint' data-value='2'></div>
                    <div className='listPoint' data-value='3'></div>
                    <div className='listPoint' data-value='4'></div>
                </div>
                <div className="pageview" onClick={this.goToStart} style={{background: '#3b76c0'}}>
                    <span>快速开始</span>
                </div>
                <div className="pageview" style={{background: '#58c03b'}}>
                    <span>丰富的API</span>
                </div>
                <div className="pageview imgpage" style={{background: '#c03b25'}}>
                    <img></img>
                    <span>炫酷的效果</span>
                </div>
                <div className="pageview" style={{background: '#e0a718'}}>
                    <h4>这是一款致力于打造真实、合理、高效展示数据的组建</h4>
                </div>
                <div className="pageview" style={{background: '#c03eac'}}>
                <h3>页面-5</h3>
                </div>
            </div>
        )
    }
}

export default Slide;
