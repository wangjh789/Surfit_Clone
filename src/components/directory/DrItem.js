import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const DrItemBlock = styled.div`
position: relative;
height: 570px;
width: 300px;
@media only screen and (max-width: 768px){
  height: auto;
  min-width: 280px;
  padding: 0 20px 20px;
  position: relative;
  width: 100%;
  &::before{
    background: gray;
    bottom: 0;
    content: "";
    height: 1px;
    left: 20px;
    position: absolute;
    width: calc(100% - 40px);
  }
}
`;
const DrItemHeader = styled.div`
border-radius: 6px;
.dr-image{
  background-color: #e5e6ec;
    display: block;
    height: 330px;
    width: 100%;
    z-index: 10;
    img{
      border-radius:6px;
      object-fit: cover;
      object-position: center;
      width:100%;
      height:100%;
    }
}
@media only screen and (max-width: 768px){
  border-radius: 20px;
  left: 20px;
  position: absolute;
  z-index: 1;
  .dr-image{
    height: 70px;
    padding-top: 0;
    width: 70px;
  }
}
`;
const DrItemFooter = styled.div`
padding-top: 20px;
position: relative;
.dr-name{
  padding-right: 40px;
  a{
    color: #111218;
    font-size: 20px;
    font-weight: 600;
    position: relative;
  }
}
.dr-info{
  padding: 6px 0;
  .title{
    color: #111218;
    font-size: 14px;
    font-weight: 500;
    margin-right: 4px;
  }
}
.dr-intro{
  color: #78797d;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  padding-bottom: 20px;
}
.dr-link{
  li{
    background-color: #fff;
    border-radius: 10px;
    float: left;
    height: 30px;
    margin: 0 10px 10px 0;
    width: 30px;
    .url-icon{
      display: inline-block;
      height: 100%;
      position: relative;
      width: 100%;
      .icon{
        background-repeat: no-repeat;
        background-size: 30px;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        &.branch{
          filter: invert(.6);
          background-image: url("https://directory.surfit.io/images/60a1282cecb2544ff3c6913f6906e20b.png");
        }
        &.star{
          filter: none;
          background-image: url("https://directory.surfit.io/images/97b334ae211e57ebedbe12e3c575dc43.png");
        }
        &.lk{
          filter: invert(.5);
          background-image: url('https://directory.surfit.io/images/4aa4adf43cb3a5934537b2b786ea5e52.png');
        }
        &.git{
          filter: invert(.5);
          background-image: url("https://directory.surfit.io/images/cc9cfe6d02a38c061dd0876de3e64b9a.png");
        }
        &.insta{
          filter: invert(.5);
          background-image:url('https://directory.surfit.io/images/e8dd3f36ee75aae00af5f2cdc7f15115.png');
        }
      }
      
    }
  }
}
@media only screen and (max-width: 768px){
  padding-left: 90px;
  padding-top: 0;
}
`;

const DrItem = ({directory})=>{
  const {image,name,title,link,intro,branch,portfolio,extra} = directory;
  return (
    <DrItemBlock>
      <div className='item-inner'>
        <DrItemHeader>
          <Link to={link} className='dr-image'>
          <img alt={`${name}의 프로필 이미지` }
          src={image} lazy="loaded"/>
          </Link>
        </DrItemHeader>
        <DrItemFooter>
          <div className='dr-name'>
            <Link to={link}>{name}</Link>
          </div>
          <div className='dr-info'>
            <span className='title'>{title}</span>
          </div>
          <div className="dr-intro">{intro}</div>
          <div className='dr-link'>
            <ul>
              {branch&& <li><Link to={branch} className='url-icon'><span className='icon branch'></span></Link></li>}
              {portfolio&& <li><Link to={portfolio} className='url-icon'><span className='icon star'></span></Link></li>}
              {extra&& <li><Link to={extra} className='url-icon'><span className='icon lk'></span></Link></li>}
            </ul>
          </div>
        </DrItemFooter>
      </div>
    </DrItemBlock>
  );
}

export default DrItem;