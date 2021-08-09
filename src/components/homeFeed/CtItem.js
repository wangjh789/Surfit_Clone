import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const CtItemBlock = styled.div`
background: #fff;
box-shadow: 0 6px 25px rgb(24 25 31 / 5%);
border-radius: 6px;
height: 340px;
width: 300px;
&:nth-child(3){
  display:none;
}
&:hover{
  transition: all .3s;
  transform: translateY(-10px);
}
@media screen and (max-width: 1260px) {
  &:nth-child(3){
    display:block;
  }
}
@media screen and (max-width: 768px) {
  border-radius: 0;
  height: auto;
  min-width: 280px;
  overflow: visible;
  width: 100%;
  &:nth-child(3){
    display:none;
  }
}
`;
const ItemInner = styled.div`
height: 100%;
position: relative;
`;
const CtItemHeader = styled.div`
height: 100%;
width:100%;
padding-bottom: 50px;
position: relative;
`;
const CtImage = styled.div`
background-color: #e5e6ec;
background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGNpcmNsZSBpZD0iYSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMi41Ii8+PGNpcmNsZSBpZD0iYiIgY3g9IjEyLjUiIGN5PSIyLjUiIHI9IjIuNSIvPjxjaXJjbGUgaWQ9ImMiIGN4PSIyMi41IiBjeT0iMi41IiByPSIyLjUiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiI+PGc+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPjx1c2UgZmlsbC1vcGFjaXR5PSIuNSIgZmlsbD0iIzE2MTYxNiIgeGxpbms6aHJlZj0iI2EiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjMzU2MkZGIiB4bGluazpocmVmPSIjYSIvPjwvZz48Zz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii41IiBmaWxsPSIjMTYxNjE2IiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbC1vcGFjaXR5PSIuMDIiIGZpbGw9IiMzNTYyRkYiIHhsaW5rOmhyZWY9IiNiIi8+PC9nPjxnPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2MiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjUiIGZpbGw9IiMxNjE2MTYiIHhsaW5rOmhyZWY9IiNjIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii4wMiIgZmlsbD0iIzM1NjJGRiIgeGxpbms6aHJlZj0iI2MiLz48L2c+PC9nPjwvc3ZnPg==);
background-position: 50%;
background-repeat: no-repeat;
background-size: 30px;
border-radius: 6px 6px 0 0;
position: relative;
width: 100%;
height: 145px;
@media screen and (max-width: 768px) {
  height:auto;
  border-radius: 0;
}
`;
const CtImageInner = styled.div`
padding-top: 48.4848%;
position: relative;

img{
  border-radius: 6px 6px 0 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
  display: block;
  left: 0;
  position: absolute;
  top: 0;
}
`;
const CtDesc = styled.div`
position: relative;
box-sizing: border-box;
padding: 15px;
height: 149px;

@media screen and (max-width: 768px) {
  height:auto;
}
`;
const CtTitle = styled.div`
word-wrap: break-word;
-webkit-box-orient: vertical;
display: -webkit-box;
overflow: hidden;
word-break: keep-all;
-webkit-line-clamp: 2;
a{
  color: #393a40;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}
@media screen and (max-width: 768px) {
  a{
    color: #18191f;
    font-size: 18px;
  }
}
`;
const CtText = styled.div`
-webkit-line-clamp: 2;
word-wrap: break-word;
-webkit-box-orient: vertical;
display: -webkit-box;
overflow: hidden;
padding-top: 6px;
word-break: keep-all;
a{
  color: #717278;
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  word-break: break-word;
}
@media screen and (max-width: 768px) {
  padding-top:8px;
  a{
    color: #18191f;
    font-size: 14px;
  }
`;
const CtTag = styled.div`
bottom: 16px;
position: absolute;
left: 0;
line-height: 1.1;
padding: 0 18px;
a{
  color: #717278;
  display: inline-block;
  float: left;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  margin-right: 10px;
}
@media screen and (max-width: 768px) {
  padding:20px 0px;
  position: static;
  display: block;
  a{
    font-size: 13px;
  }
`;
const CtItemFooter = styled.div`
border-top: 1px solid #f2f3f9;
bottom: 0;
box-sizing: content-box;
height: 50px;
left: 0;
position: absolute;
width: 100%;
`;
const CtInfo = styled.div`
display: inline-block;
left: 16px;
position: absolute;
top: 50%;
transform: translateY(-50%);
a{
  float:left;
}
.ct-channel{
  display: inline-block;
  height: 22px;
  width: 22px;
}
img{
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  border-radius: 4px;
  height: 100%;
}
.ct-author{
  color: #717278;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  padding-left: 10px;
}
`;

const CtItem = ({post})=>{
  if(!post){return <></>}
  return(
    <CtItemBlock>
      <ItemInner>
        <CtItemHeader>
          <CtImage>
          <CtImageInner>
            <img src={post.pImg} alt={post.title} className="img-center"/>
          </CtImageInner>
          </CtImage>
          <CtDesc>
            <CtTitle>
              <Link to={post.pLink}><div>{post.title}</div></Link>
            </CtTitle>
            <CtText>
              <Link to={post.pLink}><div>{post.desc}</div></Link>
            </CtText>
            <CtTag>
              {post.tags && (post.tags.map(tag=>
                <Link to={tag.link}>{tag.name}</Link>
                ))}
            </CtTag>
          </CtDesc>
        </CtItemHeader>
        <CtItemFooter>
          <CtInfo>
            <Link className="ct-channel">
            <img alt="Coupang Design의 로고" data-src="https://api.surfit.io/v1/channel/logo/3O6nK" src="https://api.surfit.io/v1/channel/logo/3O6nK" lazy="loaded"/>
            </Link>
            <Link className='ct-author'>Coupang Design</Link>
          </CtInfo>
        </CtItemFooter>
      </ItemInner>
    </CtItemBlock>
  );
}

export default CtItem;