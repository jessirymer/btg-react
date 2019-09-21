import React from "react"

const ArrangeBy = () => {
    return (
        <div className="d-flex filter-bar">
            <div className="display-type hide">
              <button className="btn btn-lg btn-naked" title="See results in a list">
                <i className="fas fa-list-alt"></i>
              </button>
              <button className="btn btn-lg btn-naked active" title="See results in a grid">
                <i className="fas fa-th-large"></i>
              </button>
            </div>
            <div className="inline-field">
              <label htmlFor="">Arrange By</label>
              <select className="form-control form-control-sm" name="" id="">
                <option value="">Asset ID</option>
                <option value="">Asset Name</option>
                <option value="">Created By</option>
                <option value="">Create Date</option>
                <option value="">Client</option>
              </select>
            </div>
        </div>
    )
}

export default ArrangeBy