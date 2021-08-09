import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const NavArea = styled.div`
width:230px;
height: 100vh;
position: sticky;
top: 0;
left: 0;
margin-top: 20px;
padding-top: 90px;
@media screen and (max-width: 1024px) {
  display: flex;
  height: 100%;
  margin-top: 0;
  opacity: 0;
  padding-top: 20px;
  pointer-events: none;
  position: fixed;
  transform: translateY(10px);
  width: 100%;
  z-index: 5000;

  &.is--open{
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
}
`;
const NavContainer = styled.div`
width: 100%;
height: 100%;
padding-bottom: 30px;
@media screen and (max-width: 1024px){
  background: #fff;
  border-radius: 20px 20px 0 0;
  padding: 0;
  position: relative;
}
`;
const NavInner = styled.div`
height: 100%;
overflow-y: scroll;
width: 100%;
.btn-cancel{
  background: black;
  border-radius: 10px;
  font-size: 0;
  height: 30px;
  display: none;
  position: absolute;
  right: 15px;
  top: 15px;
  text-indent: -9999px;
  width: 30px;
  z-index: 5;
}
@media screen and (max-width: 1024px){
  padding: 20px 20px 40px;
  .btn-cancel{
    display: block;
    background:url('https://directory.surfit.io/images/5aadd9d4142e39281f6f42d5b8f01f7e.svg') no-repeat;
    background-position: 50%;
    height: 30px;
    width:30px;
  }
}
`;
const NavItems = styled.ul`
.cate-level-1{
  position: relative;
}
.item{
  color: #78797d;
  display: inline-block;
  padding: 7px 12px 7px 48px;
  position: relative;
  transition: all .1s ease;
  width: -webkit-fill-available;
  word-break: keep-all;
  z-index: 1;
}
.cate-level-1>.item{
  background: transparent;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 4px;
  position: relative;
  transition: all .1s ease;
}
.cate-level-1 img{
  font-size: 0;
  height: 18px;
  left: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
}
.item.is--on{
  color: #18191e;
  font-weight: 700;
}
.cate-level-1.is--open>.item{
  background: #fff;
}

.level-2-wrap{
  margin: 6px 0;
  max-height: 400px;
  overflow-y: auto;
  display:none;
}
.cate-level-1.is--open .level-2-wrap{
  display:block;
}
.level-2-wrap .cate-level-2>.item{
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}
@media screen and (max-width: 1024px){
  .cate-level-1{
    border-bottom: 1px solid #e5e6ec;
    margin-bottom: 20px;
    .item{
      display: inline-block;
      margin-bottom: 10px;
      padding-left: 30px;
      width: auto;
    }
    img{
      left:0;
    }
    .level-2-wrap{
      display: block;
      margin: 0 0 20px;
      padding-left: 30px;
      .cate-level-2{
        display: inline-block;
        float: left;
        width: 50%;
      }
    }
  }
}
`;

const Navigation = ({navItems})=>{
  const nav1Handling = (e)=>{
    const currentLevel1_li = document.querySelector('.is--open');
    currentLevel1_li.classList.remove('is--open');
    currentLevel1_li.firstChild.classList.remove('is--on')
    e.target.parentNode.classList.add('is--open');
    e.target.classList.add('is--on');

    const currentLevel2_a = document.querySelector('.cate-level-2 .is--on');
    if(currentLevel2_a)
      currentLevel2_a.classList.remove('is--on');

    onClickCancelBtn();
  } 
  const nav2Handling = (e)=>{
    const currentLevel2_a = document.querySelector('.cate-level-2 .is--on');
    if(currentLevel2_a)
      currentLevel2_a.classList.remove('is--on');
    e.target.classList.add('is--on');

    onClickCancelBtn();
  }
  const onClickCancelBtn = (e)=>{
    const nav = document.querySelector('.nav-area.is--open');
    if(nav) nav.classList.remove('is--open');
  }
  return (
    <NavArea className='nav-area'>
      <NavContainer>
        <NavInner>
          <Link className='btn-cancel' onClick={onClickCancelBtn}>닫기</Link>
          <NavItems>
            {navItems && (
              <div>
                {navItems.map(navItem=>
                  <li className={`cate-level-1 ${navItems[0]===navItem?"is--open":''}`} >
                    <Link className={`item ${navItems[0]===navItem?"is--on":''}`} to={navItem.link} onClick={nav1Handling}>
                      <img src={navItem.img} alt={navItem.title}/>
                      {navItem.title}
                    </Link>
                    <ul className='level-2-wrap'>
                      {navItem.sub.map(subItem=>
                        <li className='cate-level-2'>
                          <Link className='item' to={subItem.link} onClick={nav2Handling}>{subItem.title}</Link>
                        </li>
                        )}
                    </ul>
                  </li>
                  )}
              </div>
            )}
          </NavItems>

        </NavInner>
      </NavContainer>
    </NavArea>
  );
}

export default Navigation;