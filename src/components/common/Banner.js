import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const BannerComp = styled.div`
height: 55vh;
max-height: 700px;
min-height: 500px;
overflow: hidden;
position: relative;
width: 100%;
z-index: 10;
`;
const BannerInner = styled.div`
.title-area{
  left: 50%;
  padding: 20px 20px 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  z-index: 5;
  .title h1{
    color: #fff;
    font-size: 50px;
    padding-bottom: 18px;
    font-weight: 700;
    line-height: 1.2;
  }
  .title p{
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    padding-bottom: 30px;
  }
  .btn{
    border: 2px solid transparent;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    position: relative;
  }
  .btn-primary{
    border-radius: 100px;
    font-size: 18px;
    min-width: 220px;
    padding: 16px 40px;
    text-shadow: none;
    background: #3562ff;
    color: #fff;
  }
}
.desc-area{
  bottom: 26px;
  left: 30px;
  position: absolute;
  z-index: 1;
  .title{
    color: #f2f3f9;
    font-size: 16px;
    font-weight: 500;
  }
  .author{
    color: #b6b7bd;
    display: block;
    font-size: 13px;
    margin-top: 2px;
  }
}
.bg-area{
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
  img{
    width:100%;
    height:100%;
    object-fit: cover;
    object-position: center;
  }
}
`;

const Banner = ()=>{
  return (
    <BannerComp>
      <BannerInner>
        <div className='title-area'>
          <div className="title">
            <h1>매일 성장하고<br/>더 멋지게 일하세요</h1> 
            <p>새 탭에서 펼쳐지는 맞춤 커리어 콘텐츠</p>
            <div><Link className="btn btn-primary login">시작하기</Link>
            </div>
          </div>
        </div>
        <div className='desc-area'>
          <Link href="#" target="_blank">
            <span className="title">Isolation</span>
            <span className="author">Niyi Okeowo</span>
          </Link>
        </div>
        <div className="bg-area">
          <img lazy="loaded" src="https://storage.surfit.io/env/landing/YK26K/img-6077030935f3174993a443.jpg" alt="Isolation"/>
        </div>
      </BannerInner>
    </BannerComp>
  );
}

export default Banner;