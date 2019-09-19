import React from "react"

const ArrangeBy = () => {
    return (
        <div class="d-flex filter-bar">
            <div class="display-type hide">
              <button class="btn btn-lg btn-naked" title="See results in a list">
                <i class="fas fa-list-alt"></i>
              </button>
              <button class="btn btn-lg btn-naked active" title="See results in a grid">
                <i class="fas fa-th-large"></i>
              </button>
            </div>
            <div class="inline-field">
              <label for="">Arrange By</label>
              <select class="form-control form-control-sm" name="" id="">
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