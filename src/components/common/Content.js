import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import CtJobs from '../homeFeed/CtJobs';

const ContentArea = styled.div`
padding-top: 70px;
position: relative;
@media screen and (max-width: 1024px) {
  padding-top:90px;
}
`;
const HeadWrap = styled.div`
width: 100%;
position: absolute;
left: 0;
top: 70px;
&.index{
  display:none;
}
.head-category-area{
  left: 0;
  position: absolute;
  top: 20px;
  transition: padding .2s;
  width: 100%;
  .head-category{
    align-items: center;
    background: transparent;
    color: #111218;
    display: flex;
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    pointer-events: none;
    span{
      display:none;
    }
  }
}
@media only screen and (max-width: 1024px){
  top: 0;
  &.index{
    display:block;
  }
  .head-category-area{
    .head-category{
      background: white;
      border-radius: 10px;
      font-size: 18px;
      height: 60px;
      overflow: hidden;
      padding: 0 60px 0 18px;
      pointer-events: auto;
      position: relative;
      text-align: left;
      text-overflow: ellipsis;
      transition: none;
      white-space: nowrap;
      width: 100%;
      span{
        border-radius: 10px;
        display: inline-block;
        height: 30px;
        position: absolute;
        right: 16px;
        top: 40%;
        transform: translateY(-50%);
        width: 30px;
      }
    }
  }
}
`;

const ItemList = styled.div`
margin-bottom: 40px;
&:hover a .index.title{
  margin-left: 30px;
}
&:hover a .emogi{
  opacity:1;
}

.emogi{
  height: 22px;
  left: 0;
  margin-top: 0;
  opacity: 0;
  position: absolute;
  transition: all .15s;
  width: 22px;

  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
}
.emogi-robot{
  background: url("https://www.surfit.io/images/6ab8f3e766e28a422d0b51b56feef008.png") no-repeat;
  background-size : contain;
}

@media screen and (max-width: 768px) {
  border-bottom: none;
  margin-bottom: 20px;
  padding-bottom: 0;
  }

`;
const ItemTitleArea = styled.div`
color: #e5e6ec;
font-size: 20px;
font-weight: 700;
height: 30px;
margin-bottom: 16px;
position: relative;
.title{
  color: #17181e;
  margin-left: 0px;
  position: relative;
  transition: all .15s;
}


@media screen and (max-width: 768px) {
  font-size: 16px;
  height: 20px;
  padding: 0 20px;
  }
`;
const ItemArea = styled.div`
grid-gap: 30px;
display: grid;
grid-template-columns: repeat(3,300px);

@media screen and (max-width: 1260px) {
  grid-template-columns: repeat(2,300px);
  }
@media screen and (max-width: 768px) {
    grid-template-columns: repeat(1,1fr);
  }
`;

const headMap = {
  "web-dev":'웹 개발',
  "react":"React",
  "python":"Python",
  "android":'Android',
  "bigdata-ai-ml":'빅데이터&AI',
  "service":'서비스 기획',
  "project-management":"프로젝트 관리",
  "inspiration":'인스퍼레이션',
  "ui-ux":'UI/UX',
  "design-resource":'디자인 리소스',
  "performance":"퍼포먼스 마케팅",
  "content":"콘텐츠 마케팅",
  "general-startup":"일반 스타트업",
  "business":'비즈니스',
  "management":'기업 문화',

  "general-dev":'일반 개발',
  "javascript":'Javascript',
  "vuejs":'Vue.js',
  "angular":"Angular",
  "nodejs":"Node.js",
  "java":'Java',
  "php":'PHP',
  'infra-structure':'Infra Structure',
  'database':"Database",
  "ios":"iOS",
  "git":"Git",
}
const defaultDir = {
  'homeFeed' :"인기 카테고리",
  'directory':"전체 디렉토리",
  'jobs' :"전체 채용"
}
const onClickNavBtn = (e)=>{
  const nav = document.querySelector('.nav-area');
  if(nav)nav.classList.add('is--open');
}


const Content = ({params,newItems,recomendItems,jobs,page})=>{
  const {category, subCategory} = params.params;
  return (
    <>
    <ContentArea style={((page==='homeFeed') &&!category?{}:{paddingTop:'140px'})}>
        <HeadWrap className={(page==='homeFeed'&& !category? 'index':'')}>
        <div className='head-category-area'>
          <button className='head-category' onClick={onClickNavBtn}>
            {category?subCategory?headMap[subCategory]:category:defaultDir[page]}
            <span>
              <svg width="12" height="8" viewBox="0 0 12 8">
                <path d="M6.00006 7.3146L11.6569 1.65775L10.2427 0.243536L6.00064 4.4856L1.75723 0.242188L0.343018 1.6564L6.00006 7.3146Z"></path>
              </svg>
            </span>
          </button>
        </div>
        </HeadWrap>
     
      {!subCategory &&(page==='homeFeed')&&(
        <ItemList>
        <ItemTitleArea>
          <Link><span class="emogi emogi-robot"></span><span class="title index">추천 콘텐츠</span></Link>
        </ItemTitleArea>
        <ItemArea>
          {recomendItems&& (
            recomendItems
          )}
          {jobs && <CtJobs jobs={jobs}/>}
        </ItemArea>
      </ItemList>
      )}
      <ItemList>
        {!subCategory &&(page==='homeFeed')&&(
        <ItemTitleArea>
          <Link><span class="title">최신 콘텐츠</span></Link>
        </ItemTitleArea>)}
        <ItemArea>
          {newItems&& (
            newItems
          )}
        </ItemArea>
      </ItemList>
    </ContentArea>
    </>
  );
}
export default Content;