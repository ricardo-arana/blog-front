import React from 'react';
import MyParallax from '../components/MyParallax';
import Post from '../components/blog/Post';
import data from '../webServices/PostServices';
import Panel from '../components/blog/Panel';
import Profile from '../components/blog/Profile';
import ListCategory from '../components/blog/ListCategory';
import InfiniteScroll from 'react-infinite-scroller';
export default class Home extends React.Component{

      constructor(props) {
          super(props);

          this.state = {
              posts: [],
              hasMoreItems: true,
              countPost: 2,
              totalpost: 0
          };
      }

      loadItems(page) {
        var self = this;
        var nextPost = true;
        var contador = self.state.countPost;
        var posts = self.state.posts

        if(posts.length == data.PostsResponse.length){
          nextPost = false;
          self.setState({
                  hasMoreItems : false
                          });
        }else{
          nextPost = true;
          data.PostsResponse.slice(self.state.posts.length,self.state.posts.length+2).map((post) => {
              posts.push(post);
          });
          self.setState({
                  posts: posts,
                          });
        }




    }
render(){
  const loader = <div className="loader">Loading ...</div>;
   var items = [];
        this.state.posts.map((post, i) => {
            items.push(
                   <Post postInfo={post} key={i}/>
            );
        });
  return(
    <div>
    <MyParallax></MyParallax>
    <div className="row">
    <div className="col-xs-12
              col-sm-8
              col-md-8
              col-lg-8">
      <div className="box" style={{'display': 'block','marginBotton':'1em'}}>
      <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>

                <div className="posts">
                    {items}
                </div>
            </InfiniteScroll>

      </div>
    </div>

    <div className="col-xs-0
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
