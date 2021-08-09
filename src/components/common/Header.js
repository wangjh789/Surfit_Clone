import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const HeaderComp = styled.header`
height: 60px;
position: fixed;
left: 0;
top: 0;
min-width: 300px;
width: 100%;
z-index: 4000;
`;
const HeaderInner = styled.div`
background: #18191f;
height: 100%;
position: relative;
padding: 0 24px;
z-index: 1001;
`;
const LeftMenu = styled.div`
align-items: center;
display: inline-flex;
height: 100%;
.logo{
  font-size: 0;
  padding-right: 16px;
  svg{
    stroke: #fff;
    height: 32px;
    transition: stroke .2s;
    width: 32px;
  }
}
.left-inner{
  li{
    align-items: center;
    display: flex;
    float: left;
    padding: 0 10px;
  }
  li>a{
    color: hsla(0,0%,94%,.65);
    font-size: 15px;
    font-weight: 600;
    padding: 0 4px;
    position: relative;
    transition: all .15s;
  }
  li>a:hover, li.is--active>a{
    color: #f0f0f0;
  }
}
`;
const RightMenu = styled.div`
float: right;
.right-inner{
  padding-top: 15px;
  position:static;
  .mn-item{
    float: left;
    height: 30px;
    margin: 0 7px;
    text-align: center;
    width: 50px;
    .item{
      display: inline-block;
      height: 100%;
      padding-top: 5px;
      width: 100%;
    }
    &.login{
      margin: 0 0 0 7px;
      width: auto;
      a{
        color: #a0a1a7;
        font-size: 16px;
        font-weight: 500;
        padding-top: 4px;
        transition: all .15s;
      }
    }
  }
}

}
`;

const Header = ()=> {
  
  const headerHandling = (e)=>{
    const currentHeader = document.querySelector('.is--active');
  
    currentHeader.classList.remove('is--active');
    e.target.parentNode.classList.add('is--active');
  }
  return (
    <>
      <HeaderComp>
        <HeaderInner>
          <LeftMenu>
            <div className='logo'>
              <Link>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4"></circle> <path d="M77.5999 70.302H77.3379C74.5269 70.059 72.0019 69.71 70.0139 68.835C67.4109 69.98 63.8879 70.685 60.0069 70.685C56.1259 70.685 52.6029 69.98 49.9999 68.835C47.3969 69.98 43.8749 70.685 39.9929 70.685C36.1119 70.685 32.5889 69.98 29.9859 68.835C27.9969 69.71 25.4719 70.059 22.6599 70.302H22.3999M62.4999 81.795H62.2249C61.2939 81.928 60.3269 82.099 59.3339 82.099C55.7659 82.099 52.5289 81.657 50.1359 80.24C47.7429 81.657 44.5059 82.099 40.9379 82.099C39.8479 82.099 38.7879 81.913 37.7739 81.754L37.4999 81.752M85.0039 58.626C80.4719 58.626 76.3589 57.435 73.3199 55.5C70.2809 57.435 66.1679 58.626 61.6359 58.626C57.1039 58.626 52.9909 57.435 49.9519 55.5C46.9129 57.435 42.7999 58.626 38.2679 58.626C33.7359 58.626 29.6229 57.435 26.5839 55.5C23.5449 57.435 19.4319 58.626 14.8999 58.626" stroke="white" strokeWidth="4.2" strokeMiterlimit="10"></path></svg>
              </Link>
            </div>
            <div className='left-inner'>
            <nav>
              <ul>
                <li class="is--active">
                  <Link to="/" onClick={headerHandling}>홈 피드</Link>
                </li> 
                <li class="">
                  <Link to="/directory" onClick={headerHandling}>디렉토리</Link>
                </li> 
                <li class="">
                  <Link to="/jobs" onClick={headerHandling}>채용</Link>
                </li>
              </ul>
            </nav>
            </div>
          </LeftMenu>
          <RightMenu>
            <div className='right-inner'>
              <div className='mn-item'>
                <Link className='item'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.3243 4.98201C14.3159 6.97369 14.3159 10.2028 12.3243 12.1945C10.3326 14.1862 7.10345 14.1862 5.11177 12.1945C3.1201 10.2028 3.1201 6.97369 5.11177 4.98201C7.10345 2.99034 10.3326 2.99034 12.3243 4.98201ZM14.8612 12.8929C16.9167 9.96687 16.6367 5.90038 14.0213 3.28496C11.0924 0.356024 6.34365 0.356024 3.41472 3.28496C0.485785 6.21389 0.485785 10.9626 3.41472 13.8916C6.07942 16.5563 10.2504 16.7967 13.1869 14.6127L17.8336 19.2595C18.3022 19.7281 19.062 19.7281 19.5307 19.2595C19.9993 18.7908 19.9993 18.031 19.5307 17.5624L14.8612 12.8929Z" fill="#A0A0A2"></path></svg>
                </Link>
              </div>
              <div className='mn-item login'>
                <Link className="item">로그인</Link>
              </div>
            </div>
            
          </RightMenu>
        </HeaderInner>
      </HeaderComp>
    </>
  )
}
export default Header;