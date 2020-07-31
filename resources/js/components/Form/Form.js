import React, { Fragment } from 'react'

const Form = () => {
    return (
        <Fragment>
           <div className="card">
  <div className="card-header"><h3>Menu form</h3></div>
  <div className="card-body">
    <form className="forms-sample" method="post" action="{{ route('menu.store') }}">
      <div className="form-group">
        <label htmlFor="name">Menu Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter Menu name" />
      </div>
      <div className="form-group">
        <label htmlFor="icon">Menu Icon</label>
        <input type="text" className="form-control" id="icon" name="menu_icon" />
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <input type="file" className="form-control" id="status" name="status" />
      </div>
      <button type="submit" className="btn btn-primary mr-2">Submit</button>
      <button className="btn btn-light">Cancel</button>
    </form>
  </div>
</div>

    </Fragment>
    )
}

export default Form
