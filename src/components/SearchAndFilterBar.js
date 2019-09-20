import React from "react"

class SearchAndFilterBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFilter: false
        }
        this.showFilter = this.showFilter.bind(this)
    }

    showFilter = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            showFilter: !prevState.showFilter
          }));
    }
    render() {
        return (
            <div className="search-and-filter">
                <div className="page-head list-page">
                    <div className="search-form">
                        <div className="d-flex search-bar align-items-center">
                            <div className="form-field">
                                <select name="" id=""  className="form-control" title="Choose the client you want to view assets for.">
                                    <option defaultValue="">Client</option>
                                    <option defaultValue="">Amazon</option>
                                    <option defaultValue="">Go Daddy</option>
                                    <option defaultValue="">Microsoft</option>
                                    <option defaultValue="">Xerox</option>
                                </select>
                            </div>
                            <div className="col">
                                <input type="text" placeholder="Asset Id" className="form-control" title="If you know the id of the asset you want, enter it here and hit the search button." />
                            </div>
                            <div className="col">
                                <input type="text" placeholder="Keyword" className="form-control" title="Search by asset name, artwork name, description and colors." />
                            </div>
                            <div className="d-flex justify-content-around align-items-center">
                                <label className="custom-control custom-checkbox flex-d align-items-center" title="Check this box if you want to include archived assets in your search.">
                                    <input className="" type="checkbox" />
                                    <span className="include-archive-label">Include Archive</span>
                                </label>
                            </div>
                            <div className="col">
                                <div className="justify-content-end d-flex">
                                    <div>
                                        <button className="btn btn-primary btn-lg" title="Run your search">
                                            <i className="fas fa-search"></i> 
                                            Search
                                        </button>
                                    </div>
                                    <div className="p-l-10">
                                        <button className="btn btn-lg filter-toggle" title="View additional filters to refine your search results." onClick={this.showFilter}>
                                            <i className="fas fa-sliders-h"></i> 
                                            Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            { this.state.showFilter &&
                                <div className="search-filters">
                                <div className="d-flex search-bar">
                                    <div className="form-field">
                                        <label for="">Store</label>
                                        <select className="form-control form-control-sm" name="" id="" title="Choose the store you want to see assets for.">
                                            <option defaultValue="">All</option>
                                            <option defaultValue="">GoDaddy Store 1</option>
                                            <option defaultValue="">GoDaddy Store 2</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label for="">Asset Type</label>
                                        <select className="form-control form-control-sm" name="" id="" title="Choose the asset type you'd like to see in your search results">
                                            <option defaultValue="">All</option>
                                            <option defaultValue="">Company Logo</option>
                                            <option defaultValue="">Store Logo</option>
                                            <option defaultValue="">Personal Logo</option>
                                            <option defaultValue="">Style Guide</option>
                                            <option defaultValue="">Marketing Material</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label for="">Logo Type</label>
                                        <select className="form-control form-control-sm" name="" id=""  title="Choose the logo type you'd like to see in your search results">
                                            <option defaultValue="">All</option>
                                            <option defaultValue="">4 color Process</option>
                                            <option defaultValue="">Embroidery File</option>
                                            <option defaultValue="">Laser Engraving File</option>
                                            <option defaultValue="">Single Color</option>
                                            <option defaultValue="">Spot Color</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label for="">Specific color</label>
                                        <input type="text" placeholder="Start typing..." className="form-control form-control-sm"  title="Enter the color you want to see in your search results." />
                                    </div>
                                    <div className="form-field">
                                        <label for="">Created by</label>
                                        <input type="text" placeholder="Start typing..." className="form-control form-control-sm"  title="View only assets created by someone." />
                                    </div>
                                </div>
                            </div>
                        }    
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SearchAndFilterBar