import React, { Component } from "react"

class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this)
    }

    showMenu = (e) => {
        e.preventDefault();
        
        this.setState({
          showMenu: true,
        })
    }

    render() {
        return (
            <div className="be-left-sidebar">
                <div className="left-sidebar-wrapper">
                    <a className="left-sidebar-toggle" href="/#" role="button" onClick={this.showMenu}>Dashboard</a>
                    { this.state.showMenu
                        ? (
                            <div>
                                <div className="left-sidebar-spacer">
                                    <div className="left-sidebar-scroll">
                                        <div className="left-sidebar-content">
                                            <ul className="sidebar-elements">
                                                <li className="divider">Menu</li>
                                                <li className="">
                                                    <a href="index.html">
                                                        <i className="icon mdi mdi-home"></i>
                                                        <span>Home</span>
                                                    </a>
                                                </li>
                                                <li className="parent">
                                                    <a href="/#" className="active">
                                                        <i className="icon mdi mdi-view-dashboard"></i>
                                                        <span>Products</span>
                                                    </a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="add_product.html" title="Create a new on demand product">+ New Product</a>
                                                        </li>
                                                        <li>
                                                            <a href="product_list.html">Products</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="parent">
                                                    <a href="charts.html">
                                                        <i className="icon mdi mdi-store"></i>
                                                        <span>Clients</span>
                                                    </a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="charts-flot.html">My Clients</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="parent">
                                                    <a href="/#">
                                                        <i className="icon mdi mdi-chart"></i>
                                                        <span>Reports</span>
                                                    </a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="reports_sales.html">Sales</a>
                                                        </li>
                                                        <li>
                                                            <a href="reports_orders.html">Order Processing</a>
                                                        </li>
                                                        <li>
                                                            <a href="reports_products.html">Products</a>
                                                        </li>
                                                        <li>
                                                            <a href="reports_sites.html">Site Analytics</a>
                                                        </li>
                                                        <li>
                                                            <a href="reports_users.html">Users</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="supplier_list">
                                                        <i className="icon mdi mdi-truck"></i>
                                                        <span>Suppliers</span>
                                                    </a>
                                                </li>
                                                <li className="parent active">
                                                    <a href="asset_list.html"><i className="icon mdi mdi-collection-folder-image"></i><span>Assets</span></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="asset_add_v2.html">+ Add Asset</a></li>
                                                    </ul>
                                                </li>
                                                <li className=""><a href="tickets_list.html"><i className="icon mdi mdi-bug"></i><span>Tickets</span></a></li>
                                                <li className=""><a href="users_list.html"><i className="icon mdi mdi-accounts"></i><span></span>Users</a></li>
                                                <li className=""><a href="system_list.html"><i className="icon mdi mdi-settings"></i><span></span>System</a></li>
                                                <li><a href="documentation.html"><i className="icon mdi mdi-book"></i><span>Documentation</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            <div className="progress-widget">
                                <div className="progress-data">
                                    <span className="progress-value">60%</span>
                                    <span className="name">Current Project</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-primary"></div>
                                </div>
                            </div>
                            </div>
                        ) : (
                            null
                        )
                        
                    }
                </div>
            </div>
        )
    }
}

export default Sidebar