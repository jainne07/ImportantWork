import React, { Component } from 'react'

export default class AddDetails extends Component {
    render() {
        return (
            <div>
                <div className="mt-3">
            {this.props.idShow && <div className="form-group">
            <input type="text" value={this.props.id} className="form-control"disabled />
            </div>}
              <div className="form-group">
                  <input type="text" value={this.props.title} className="form-control" onChange={this.props.changeTitle} />
              </div>
              <div className="form-group">
                  <textarea  value={this.props.body} cols="30" rows="5" className="form-control" onChange={this.props.changeBody}></textarea>
              </div>
              {this.props.addItem && <button onClick={this.props.addItemBlog} type="button" disabled={!this.props.body && !this.props.title} className="btn btn-info mr-2">Add list</button>}
            {this.props.updateItem && <button onClick={()=>this.props.updateItemBlog(this.props.id)} type="button" disabled={!this.props.body && !this.props.title} className="btn btn-info mr-2">Update List</button>}
           </div>
            </div>
        )
    }
}
