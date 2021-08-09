import React from 'react'
import Body from '../components/common/Body'
import Content from '../components/common/Content'
import Navigation from '../components/common/Navigation'
import DrItem from '../components/directory/DrItem'

const navData = [
  {
    title:"전체 카테고리",
    link:'/directory',
    img:'https://directory.surfit.io/assets/images/emoji/emoji-crown.png',
    sub:[]
  },
  {
    title:"개발",
    link:'/directory/develope',
    img:'https://storage.surfit.io/env/speciality/icon/icon-8429114075fa393cbc0834.png',
    sub:[
      {
        title:"일반 개발",
        link:"/directory/develop/general-dev"
      },
      {
        title:"웹 개발",
        link:"/directory/develop/web-dev"
      },
      {
        title:"Javascript",
        link:"/directory/develop/javascript"
      },
      {
        title:"React",
        link:"/directory/develop/react"
      },
      {
        title:"Vue.js",
        link:"/directory/develop/vuejs"
      },
      {
        title:"Angular",
        link:"/directory/develop/angular"
      },
      {
        title:"Node.js",
        link:"/directory/develop/nodejs"
      },
      {
        title:"Java",
        link:"/directory/develop/java"
      },
      {
        title:"Python",
        link:"/directory/develop/python"
      },
      {
        title:"Php",
        link:"/directory/develop/php"
      },
      {
        title:"Infra-structure",
        link:"/directory/develop/infra-structure"
      },
      {
        title:"Database",
        link:"/directory/develop/database"
      },
      {
        title:"Android",
        link:"/directory/develop/android"
      },
      {
        title:"Ios",
        link:"/directory/develop/ios"
      },
      {
        title:"Git",
        link:"/directory/develop/git"
      },
      {
        title:"빅데이터&머신러닝",
        link:"/directory/develop/bigdata-ai-ml"
      },
    ]
  },
  
]
const dirData = [{
  image:'#',
  name:'가나다',
  link:'#',
  title:'개발자',
  intro:'안녕하세요',
  branch:'#',
  portfolio:'#',
  extra:'#',
},{
  image:'#',
  name:'woowang',
  title:'개발자',
  link:'#',
  intro:'안녕하세요',
  branch:'#',
  portfolio:'#',
  extra:'#',
},{
  image:'#',
  name:'wangwang',
  title:'개발자',
  link:'#',
  intro:'안녕하세요',
  branch:'#',
  portfolio:'#',
  extra:'#',
},{
  image:'#',
  name:'temp',
  link:'#',
  title:'개발자',
  intro:'안녕하세요',
  branch:'#',
  portfolio:'#',
  extra:'#',
},]


const temp = dirData.map(dir=><DrItem directory={dir}/>);

const DirectoryPage = ({match})=>{
  return(
    
    <Body>
        <Navigation navItems={navData}/>
        <Content 
        newItems={temp}
        params={match}
        page={"directory"}
        />
        
    </Body>
      
  );
}
export default DirectoryPage;