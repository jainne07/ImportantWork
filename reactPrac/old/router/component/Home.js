import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Details from './Details'
import AddDetails from './AddDetails'
export default class Home extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
             counter:0,
             showState:false,
             id:'',
             list:props.list,
             title:'',
             body:'',
             blogDet:false,
             addItem:true,
             updateItem:false,
             idShow:false
        }
    }
    handleInc =()=>{
        this.setState({ counter: this.state.counter + 1 })
    }
    handleDec =()=>{
        this.setState({ counter: this.state.counter - 1 })
    }
    handleState =()=>{
        this.setState({ showState: !this.state.showState})
    }
    delBlog=(id)=>{
        this.setState(prevState => {
             const list = prevState.list.filter(item => item.id !== id);
             return { prevState, list: list, blogDet: false };
        });
    }
   
    changeTitle = (e) =>{
        this.setState({
        title: e.target.value
        })
    }
    changeBody = (e) =>{
        this.setState({
        body: e.target.value
        })
    }
    addItemBlog = () => {
        const newItems = {
          id: this.state.list.length + 1, 
          title: this.state.title, 
          body: this.state.body
       }
      this.setState(prevState => {
        const list = [...prevState.list, newItems];
        return { list: list, newItems, blogDet: false}
      })
      this.resetForm()
    }
    resetForm = () => {
        this.setState({id:"", title: "", body: ""});
    }
    changeState=()=>{
        this.setState({
        blogDet: true
        })
    }
    update=(val1, val2, val3)=>{
        var v1 = val1
        var v2= val2
        var v3 = val3
       this.setState({
           id:v1,
           title: v2,
           body: v3,
           addItem :false,
           updateItem:true,
           idShow:true
       })
    }
   updateItemBlog = id => {
      const newItems = {
          id: this.state.id, 
          title: this.state.title, 
          body: this.state.body
       }
       this.setState(prevState => {
          const list = prevState.list.map((blog) => blog.id === id ? newItems : blog );
          return { list: list, updateItem:false, addItem:true, idShow:false, blogDet: false};
     })
     this.resetForm()
    }
    render() {
        //console.log(this.state.list)
        return (
            <div>
               <h1 className="mt-2">Welcome to Homepage</h1>
               {/* Count: {this.state.counter} 
               <div><button onClick={this.handleInc} className="btn btn-info">Increment</button><button onClick={this.handleDec} className="btn btn-info ml-3">Decrement</button></div> */}
               {this.state.showState && <div className="mod"><div className="mod-content"><h1>Welcome Modal</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam voluptatibus deserunt, ad cupiditate consequuntur doloribus cum laborum. Accusantium aut dolore sapiente placeat eligendi? Iusto, pariatur in mollitia sint ea cupiditate, quam id nam quos saepe itaque sed tempora blanditiis voluptatibus? Commodi modi quibusdam excepturi.</p>
               <div><button onClick={this.handleState} className="btn btn-light">Close</button></div></div></div>}
               <button onClick={this.handleState} className="btn btn-primary my-3">
                Show Modal
                </button>                            {
                  this.state.list.map((blog) => 
                   <div key={blog.id} className="blog-list">
                       <h2 className="text-capitalize">{blog.title}</h2>
                       <p>{blog.body.slice(0,40)}... <Link to={`/${blog.id}`} className="btn btn-link ml-2" onClick={this.changeState}>View Post</Link> 
                       <button type="button"
            onClick={()=>this.update(blog.id, blog.title, blog.body)} className="btn btn-link">
            Update
          </button> <button onClick={()=> this.delBlog(blog.id)} className="btn btn-link">Delete</button></p>     
                   </div>
                  
                    )  
                }
                {this.state.blogDet && <Details list={this.state.list}/>}
                 <AddDetails {...this.state} addItemBlog={this.addItemBlog} changeTitle={this.changeTitle}  changeBody={this.changeBody} updateItemBlog={this.updateItemBlog} /> 
                {/* <div className="mt-3">
            {this.state.idShow && <div className="form-group">
            <input type="text" value={this.state.id} className="form-control"disabled />
            </div>}
              <div className="form-group">
                  <input type="text" value={this.state.title} className="form-control" onChange={this.changeTitle} />
              </div>
              <div className="form-group">
                  <textarea  value={this.state.body} cols="30" rows="5" className="form-control" onChange={this.changeBody}></textarea>
              </div>
              {this.state.addItem && <button onClick={this.addItemBlog} type="button" disabled={!this.state.body && !this.state.title} className="btn btn-info mr-2">Add list</button>}
            {this.state.updateItem && <button onClick={()=>this.updateItemBlog(this.state.id)} type="button" disabled={!this.state.body && !this.state.title} className="btn btn-info mr-2">Update List</button>}
           </div> */}
            </div>
        )
    }
}

