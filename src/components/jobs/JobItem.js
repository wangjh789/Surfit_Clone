import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const JobItemBlock = styled.div`
position: relative;
height: 540px;
width: 300px;
@media only screen and (max-width: 768px){
  height: auto;
  min-width: 280px;
  position: relative;
  width: 100%;
}
`;
const ItemInner = styled.div`
.jb-item-header{
  .jb-header-inner{
    .jb-image{
      width: 100%;
      z-index: 10;
      background-color: #24252b;
      border-radius: 6px;
      display: block;
      height: 226px;
      overflow: hidden;
      img{
        height: 100%;
        width: 100%;
        object-position: center;
        object-fit: cover;
      }
    }
  }
}
`;
const JobItemFooter = styled.div`
padding-top: 20px;
position: relative;
.jb-logo{
  box-shadow: 0 0 22px rgb(24 25 31 / 12%);
  height: 48px;
  left: 0;
  position: absolute;
  top: 20px;
  width: 48px;
  img{
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
    border-radius: 6px;
  }
}
.jb-title{
  padding-left:60px;
  a{
    color: black;
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    padding-right: 40px;
    position: relative;
    transition: all .15s;
  }
  .jb-info{
    padding: 6px 0 8px;
    .name{
      float: left;
      font-size: 14px;
      font-weight: 500;
      margin-right: 3px;
    }
    .workplace{
      color:#78797d;
      float: left;
      font-size: 14px;
      font-weight: 500;
      transition: all .15s;
    }
  }
}
.jb-intro{
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: #78797d;
  display: -webkit-inline-box;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  overflow: hidden;
  padding-top: 10px;
  word-break: keep-all;
}
.jb-detail{
  padding-top: 14px;
  .jd{
    color: #78797d;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    padding-left: 10px;
    position: relative;
    &::before{
      background: #78797d;
      border-radius: 2px;
      content: "";
      height: 3px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
    }
  }
  a{
    color: #78797d;
  }
}
@media only screen and (max-width: 768px){
  padding: 20px 20px 10px; 
  .jb-logo{
    left: 20px;
    top: 20px;
  }
  .jb-title{
    a{
      font-size: 18px;
    }
  }
}
`;

const JobItem = ({jobItem})=>{
  const {image,logo,title,name,workplace,intro,experience,period,link} = jobItem;
  return (
    <JobItemBlock>
      <ItemInner>
        <div className='jb-item-header'>
          <div className='jb-header-inner'>
            <div className='jb-image'>
              <Link to={link}>
                <img alt={`${title}의 이미지`} data-src={image} lazy="loaded"/>
              </Link>
            </div>
          </div>
        </div>
        <JobItemFooter>
          <div className='jb-logo'>
            <Link to={link}>
            <img src={logo} alt={`${name}의 로고 이미지`}/>
            </Link>
          </div>
          <div className='jb-title'>
            <Link to={link}>{title}</Link>
            <div className='jb-info'>
              <div className="name">{name}</div>
              <div className="workplace">{workplace}</div>
            </div>
          </div>
          <div className='jb-intro'>
          {intro}
          </div>
          <div className='jb-detail'>
            <div className='jd experience'>{experience}</div>
            <div className='jd period'>{period}</div>
            <div className='jd link'>
              <Link to={link}>회사소개</Link>
            </div>
          </div>
        </JobItemFooter>
      </ItemInner>
    </JobItemBlock>
  );
}

export default JobItem;
