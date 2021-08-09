import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const  BannerBlock = styled.div`
margin-top:60px;
height: 250px;
`;
const BannerInner = styled.div`
background: url("https://jobs.surfit.io/images/aa12159755964dd78a03aec128440dcd.jpg") no-repeat;
background-position: 50%;
background-size: cover;
display: table;
height: 100%;
position: relative;
width: 100%;
.jobs-content{
  color: #fff;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  word-break: keep-all;
  h1{
    font-size: 30px;
    font-weight: 700;
  }
  p{
    font-size: 16px;
    font-weight: 500;
    margin-top: 12px;
  }
  .btn{
    border-radius: 40px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
    padding: 18px 44px;
    background: #3562ff;
    color: #fff;
    border: 2px solid transparent;
    display: inline-block;
  }
}
`;

const JobsBanner = ()=>{
  return (
    <BannerBlock>
      <BannerInner>
        <div className='jobs-content'>
          <h1>새로운 인재를 찾고 있나요?</h1>
          <p>매일 성장하는 사람들의 커뮤니티 서핏에서 채용을 홍보하세요.</p>
          <div>
            <Link className='btn'>채용 홍보하기</Link>
          </div>
        </div>
      </BannerInner>
    </BannerBlock>
  );
}
export default JobsBanner;