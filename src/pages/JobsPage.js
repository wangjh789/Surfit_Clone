import React from 'react'
import Body from '../components/common/Body';
import Content from '../components/common/Content';
import Navigation from '../components/common/Navigation';
import JobItem from '../components/jobs/JobItem';

const navData = [
  {
    title:"전체 채용",
    link:'/jobs',
    img:'https://jobs.surfit.io/assets/images/emoji/emoji-briefcase.png',
    sub:[]
  },
  {
    title:"개발",
    link:'/jobs/develope',
    img:'https://storage.surfit.io/env/speciality/icon/icon-8429114075fa393cbc0834.png',
    sub:[
      {
        title:"일반 개발",
        link:"/jobs/develop/general-dev"
      },
      {
        title:"웹 개발",
        link:"/jobs/develop/web-dev"
      },
      {
        title:"Javascript",
        link:"/jobs/develop/javascript"
      },
      {
        title:"React",
        link:"/jobs/develop/react"
      },
      {
        title:"Vue.js",
        link:"/jobs/develop/vuejs"
      },
      {
        title:"Angular",
        link:"/jobs/develop/angular"
      },
      {
        title:"Node.js",
        link:"/jobs/develop/nodejs"
      },
      {
        title:"Java",
        link:"/jobs/develop/java"
      },
      {
        title:"Python",
        link:"/jobs/develop/python"
      },
      {
        title:"Php",
        link:"/jobs/develop/php"
      },
      {
        title:"Infra-structure",
        link:"/jobs/develop/infra-structure"
      },
      {
        title:"Database",
        link:"/jobs/develop/database"
      },
      {
        title:"Android",
        link:"/jobs/develop/android"
      },
      {
        title:"Ios",
        link:"/jobs/develop/ios"
      },
      {
        title:"Git",
        link:"/jobs/develop/git"
      },
      {
        title:"빅데이터&머신러닝",
        link:"/jobs/develop/bigdata-ai-ml"
      },
    ]
  },
  
]
const jobData = [{
  image:'#',
  logo:'#',
  title:'프로덕트 디자이너',
  name:'종이 컴퍼니',
  workplace:'영등포',
  intro:'아무나 오세요',
  experience:'경력 1년 이상',
  period:'채용시 까지',
  link:'#'
},{
  image:'#',
  logo:'#',
  title:'프로덕트 디자이너',
  name:'종이',
  workplace:'영등포',
  intro:'아무나 오세요',
  experience:'경력 1년 이상',
  period:'채용시 까지',
  link:'#'
},{
  image:'#',
  logo:'#',
  title:'프로덕트 디자이너',
  name:'종이 컴퍼니',
  workplace:'영등포',
  intro:'아무나 오세요',
  experience:'경력 1년 이상',
  period:'채용시 까지',
  link:'#'
},{
  image:'#',
  logo:'#',
  title:'프로덕트 디자이너',
  name:'종이 컴퍼니',
  workplace:'영등포',
  intro:'아무나 오세요',
  experience:'경력 1년 이상',
  period:'채용시 까지',
  link:'#'
},

];
const temp = jobData.map(jobItem => <JobItem jobItem={jobItem}/>);

const JobsPage = ({match})=>{
  return (
    <Body>
        <Navigation navItems={navData}/>
        <Content 
        newItems={temp}
        params={match}
        page={"jobs"}
        />
        
    </Body>
  );
}
export default JobsPage