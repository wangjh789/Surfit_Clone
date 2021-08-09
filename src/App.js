import './App.css';
// import {Helmet} from 'react-helmet-async'
import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import Banner from './components/common/Banner';
import HomeFeedPage from './pages/HomeFeedPage';
import DirectoryPage from './pages/DirectoryPage';
import JobsBanner from './components/jobs/JobsBanner';
import JobsPage from './pages/JobsPage';

const App = ()=>{
  return(
    <>
      <Route component={Header} path="/"/>
      
      <Route component={Banner} path={['/','/explore/:category']} exact/>
      <Route component={()=>(<div style={{height:'60px'}}></div>)} path={"/explore/:category/:subCategory"} exact></Route>
      <Route component={JobsBanner} path={['/jobs','/jobs/:category','/jobs/:category/:subCategory']} exact/>
      <Route component={()=>(<div style={{height:'60px'}}></div>)} path={['/directory','/directory/:category',"/directory/:category/:subCategory"]} exact></Route>
      
      <Route component={HomeFeedPage} path={["/","/explore/:category","/explore/:category/:subCategory"]} exact/>
      <Route component={DirectoryPage} path={['/directory','/directory/:category',"/directory/:category/:subCategory"]} exact/>
      <Route component={JobsPage} path={['/jobs','/jobs/:category',"/jobs/:category/:subCategory"]} exact/>

    </>
  )
}

export default App;
