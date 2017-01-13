/**
* @Author: haiwang
* @Date:   2017-01-13 14:01:42
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-01-13 16:46:22
*/



import React from 'react';
import './index.scss';

class Slide extends React.Component {
    constructor(props) {

        super(props);
        this.changePage = this.changePage.bind(this);
        this.pageId = 0;
    }
    componentDidMount() {

        window.addEventListener('wheel', () => {

            const pageArr = document.querySelectorAll('.pageview');
            pageArr[this.pageId].style.display = 'none';
            pageArr[(this.pageId + 1) % 5].style.display = 'block';
            this.pageId = (this.pageId + 1) % 5;

        });
    }
    changePage(e) {

        if(e.target.className !== 'listPoint') {

            return;

        }

        const page = e.target.getAttribute('data-value');
        const pageArr = document.querySelectorAll('.pageview');

        pageArr[this.pageId].style.display = 'none';
        pageArr[parseInt(page)].style.display = 'block';
        this.pageId = parseInt(page);

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
                <div className="pageview" style={{background: '#3b76c0'}}>
                <h3 >页面-1</h3>
                </div>
                <div className="pageview" style={{background: '#58c03b'}}>
                <h3>页面-2</h3>
                </div>
                <div className="pageview" style={{background: '#c03b25'}}>
                <h3>页面-3</h3>
                </div>
                <div className="pageview" style={{background: '#e0a718'}}>
                <h3>页面-4</h3>
                </div>
                <div className="pageview" style={{background: '#c03eac'}}>
                <h3>页面-5</h3>
                </div>
            </div>
        )
    }
}

export default Slide;
