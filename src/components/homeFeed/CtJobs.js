import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const CtJobsBlock = styled.div`
grid-column: 3;
grid-row: 1;
position: relative;
height: 340px;
width: 300px;
@media only screen and (max-width: 1260px){
  grid-column: 2;
  grid-row: 2;
}
@media only screen and (max-width: 768px){
  grid-column: 1;
  grid-row: 3;
  height: auto;
  margin: 10px 0;
  min-width: 280px;
  padding: 0 20px;
  width: auto;
}
`;
const ItemInner = styled.div`
height: 100%;
`;
const CtJobsHeader = styled.div`
position: absolute;
top: -44px;
width: 100%;
@media only screen and (max-width: 1260px){
  display:none;
}
@media only screen and (max-width: 768px){
  display: block;
  padding-bottom: 16px;
  position: static;
  top: -36px;
  width: 100%;
}
`;
const JobsTitle = styled.a`
color: #17181e;
font-size: 20px;
font-weight: 700;
position: relative;
@media only screen and (max-width: 768px){
  font-size:16px;
}
`;
const CtJobsList = styled.div`
height:100%;
`;
const Job = styled.div`
border-radius: 6px;
box-shadow: 0 6px 25px rgb(24 25 31 / 5%);
height: 76px;
margin-top: 12px;
overflow: hidden;
position: relative;
width: 100%;
&:first-child{
  margin-top:0px;
}
&:hover{
  transition: all .3s;
  transform: translateY(-5px);
}
&.display{
  background: #e5e6ec;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGNpcmNsZSBpZD0iYSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMi41Ii8+PGNpcmNsZSBpZD0iYiIgY3g9IjEyLjUiIGN5PSIyLjUiIHI9IjIuNSIvPjxjaXJjbGUgaWQ9ImMiIGN4PSIyMi41IiBjeT0iMi41IiByPSIyLjUiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiI+PGc+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPjx1c2UgZmlsbC1vcGFjaXR5PSIuNSIgZmlsbD0iIzE2MTYxNiIgeGxpbms6aHJlZj0iI2EiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjMzU2MkZGIiB4bGluazpocmVmPSIjYSIvPjwvZz48Zz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii41IiBmaWxsPSIjMTYxNjE2IiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbC1vcGFjaXR5PSIuMDIiIGZpbGw9IiMzNTYyRkYiIHhsaW5rOmhyZWY9IiNiIi8+PC9nPjxnPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2MiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjUiIGZpbGw9IiMxNjE2MTYiIHhsaW5rOmhyZWY9IiNjIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii4wMiIgZmlsbD0iIzM1NjJGRiIgeGxpbms6aHJlZj0iI2MiLz48L2c+PC9nPjwvc3ZnPg==);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 30px;
  width: 100%;

  img{
    object-fit: cover;
    vertical-align: bottom;
    width: 100%;
    height: 100%;
  }
}

@media only screen and (max-width: 768px){
  height:86px;
  &.display{
    height: auto;
  }
}
`;
const JobInner = styled.div`
background: #fff;
display: block;
height: 100%;
width: 100%;
`;
const Logo = styled.div`
background-color: #f2f3f9;
background-image: url("https://www.surfit.io/images/dec7f542bfebf621d8212fb581622e51.png");
background-repeat: no-repeat;
background-size: cover;
border-radius: 6px;
position: absolute;
top: 50%;
transform: translateY(-50%);
height: 46px;
left: 16px;
width: 46px;
img{
  width: 100%;
  z-index: 1;
  border-radius: 6px;
  height: 100%;
}
@media only screen and (max-width: 768px){
  height: 54px;
  left: 18px;
  width: 54px;
}
`;
const DescArea = styled.div`
left: 0;
padding-left: 76px;
position: absolute;
top: 50%;
transform: translateY(-50%);
width: 100%;
.title{
  color: #18191f;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  transition: all .15s;
}
.company{
  color: #393a40;
  font-size: 12px;
  font-weight: 600;
}
.intro{
  color: #717278;
  font-size: 12px;
  font-weight: 500;
  padding-right: 10px;
  padding-top: 2px;
}
@media only screen and (max-width: 768px){
  padding-left: 86px;
  .title{
    font-size:15px;
  }
  .company{
    font-size: 13px;
    padding: 1px 30px 2px 0;
  }
  .intro{
    font-size: 13px;
    padding-top: 0;
  }
}
`;

const CtJobs = ({jobs})=>{
  if(!jobs){return null}
  return (
    <CtJobsBlock>
      <ItemInner>
        <CtJobsHeader>
          <Link><JobsTitle>새로운 채용공고</JobsTitle></Link>
        </CtJobsHeader>
        <CtJobsList>
          {jobs && (
            jobs.map(job=>(
              <Job>
                <JobInner>
              <Logo>
                <img src={job.logo} alt={job.company}/>
              </Logo>
              <DescArea>
                <div className="title">{job.title}</div>
                <div className="company">{job.company}</div>
                <div className="intro">{job.intro}</div>
              </DescArea>
            </JobInner>
              </Job>
            ))
          )}
          <Job className='display'>
            <Link><img src="https://api.surfit.io/v1/ad/dp/img/1309337004?t=1627804578" alt="업무 시간 줄여주는 최적의 작업용 데스크탑"/></Link>
          </Job>
        </CtJobsList>
      </ItemInner>
    </CtJobsBlock>
  );
}

export default CtJobs;