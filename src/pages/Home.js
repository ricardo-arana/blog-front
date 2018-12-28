import React from 'react';
import MyParallax from '../components/MyParallax';
import Post from '../components/blog/Post';
import data from '../webServices/PostServices';
import Panel from '../components/blog/Panel';
import Profile from '../components/blog/Profile';
import ListCategory from '../components/blog/ListCategory';
export default class Home extends React.Component{


render(){
  const listPost = data.PostsResponse.map((post) =>
   <Post postInfo={post} />);
  return(
    <div>
    <MyParallax></MyParallax>
    <div className="row">
    <div className="col-xs-12
              col-sm-8
              col-md-8
              col-lg-8">
      <div className="box" style={{'display': 'block','marginBotton':'1em'}}>
        {listPost}
      </div>
    </div>

    <div className="col-xs-12
              col-sm-4
              col-md-4
              col-lg-4">
      <div className="box">
        <Panel Title="Quién soy?">
        <Profile/>
        </Panel>
        <Panel Title="Categorias">
         <ListCategory categories={data.Categories}/>
        </Panel>
      </div>
    </div>
    </div>
    </div>
  );
}

}
