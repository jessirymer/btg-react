import React from "react"
import {Button, Modal} from "react-bootstrap"
import Versions from "./Versions"



class AssetItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    showModal = (e) => {
        e.preventDefault()

        this.setState({show: true})
    }
    handleClose = () => {
        this.setState({show: false})
    }


    render() {
        const versions =this.props.versions.map((version, key) => 
            <Versions 
                key={version.id}
                id={version.id}
                logoType={version.logoType}
                stitchCount={version.stitchCount}
                isResizable={version.isResizable}
                description={version.description}
                colors={version.colors}
                sizeHeight={version.sizeHeight}
                sizeWidth={version.sizeWidth}
                sizeDimension={version.sizeDimension}
                imgsrc={version.imgsrc}
            />
        )
        return (
                <div className="col-sm-6 col-md-4 col-lg-3  card-asset">
                    <div className="flip-container">
                        <div className="front">
                            <div className="asset-wrapper" onClick="window.location='asset_edit.html'">
                                <span className="vertical-helper"></span>
                                <img  className="" src={this.props.imgsrc} alt="" />
                            </div>
                            <div className="asset-title ng-binding">
                                <strong>{this.props.name}</strong>
                                <div className="row">
                                    <div className="col">ID: {this.props.id}</div>
                                    <div className="col text-right">Client: {this.props.client}</div>
                                </div>
                                <ul className="details quiet">
                                    <li>Store: {this.props.store}</li>
                                    <li>Asset Type: {this.props.type}</li>
                                </ul>
                                <h4 className="text-center">
                                    <strong>
                                        <a href="/#" onClick={this.showModal} title="View the versions of this asset.">{this.props.versions.length} Versions </a>
                                         | 
                                        <a href="/#" title="Add an additional version to this asset."> Add</a>
                                    </strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.name} ({this.props.id})</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{versions}</Modal.Body>
                        <Modal.Footer>
                        <div class="text-center m-t-10"><button class="btn btn-lg">Add Variation</button></div>
                        </Modal.Footer>
                    </Modal>
                </div> 
        )
    }
}

export default AssetItem

// class AssetItem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             modalVisibility: false
//         }
//         this.showModal = this.showModal.bind(this)
//     }

//     showModal = (e) => {
//         e.preventDefault()
        
//         this.setState({modalVisibility: true})
//     }

//     render() {
//         return (
//             <div>
//                 <div className="col-sm-6 col-md-4 col-lg-3">
//                     <div className="flip-container">
//                         <div className="front">
//                             <div className="asset-wrapper" onClick="window.location='asset_edit.html'">
//                                 <span className="vertical-helper"></span>
//                                 <img  className="" src={this.props.imgsrc} alt="" />
//                             </div>
//                             <div className="asset-title ng-binding">
//                                 <strong>{this.props.name}</strong>
//                                 <div className="row">
//                                     <div className="col">ID: {this.props.id}</div>
//                                     <div className="col text-right">Client: {this.props.client}</div>
//                                 </div>
//                                 <ul className="details quiet">
//                                     <li>Store: {this.props.store}</li>
//                                     <li>Asset Type: {this.props.type}</li>
//                                 </ul>
//                                 <h4 className="text-center">
//                                     <strong>
//                                         <a href="/#" data-toggle="modal" data-target="#asset_variations" title="View the versions of this asset." onClick={this.state.showModal}>{this.props.versions.length} Versions </a>
//                                          | 
//                                         <a href="/#" title="Add an additional versi`on to this asset."> Add</a>
//                                     </strong>
//                                 </h4>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="modal fade" id="asset_variations" tabindex="-1" role="dialog" aria-labelledby="asset_variations" aria-hidden="true" show={this.state.modalVisibility}>
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-body">
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">×</span>
//                             </button>
//                             <h2>
//                                 Go Daddy For Good (4548)
//                             </h2>
//                             <h4>Company Logo</h4>
//                             <div className="asset-list">
//                                 <div className="row border-bottom">
//                                 <div className="col align-self-center">
//                                     <img className="img-fluid" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83151" />
//                                 </div>
//                                 <div className="col">
//                                     <h4>Asset Id: 4548</h4>
//                                     <ul className="details quiet">
//                                     <li>Logo Type: Spot Color</li>
//                                     <li>Resizable: Yes</li>
//                                     <li>Description: Something the user entered when they made this variation...</li>
//                                     <li>Colors:
//                                         <div className="d-inline-block">
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <button className="btn btn-sm"><i className="fa fa-link"></i> Public</button>
//                                         <button className="btn btn-sm"><i className="fa fa-download"></i> Download</button>
//                                         <button className="btn btn-sm"><i className="fa fa-file-image"></i> Preview</button>
//                                     </li>
//                                     </ul>
//                                 </div>
//                                 </div>
//                                 <div className="row border-bottom">
//                                 <div className="col align-self-center">
//                                     <img className="img-fluid" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83151" />
//                                 </div>
//                                 <div className="col">
//                                     <h4>Asset Id: 4548-1</h4>
//                                     <ul className="details quiet">
//                                     <li>Logo Type: Embroidery</li>
//                                     <li>Stitch Count: 10 SPI</li>
//                                     <li>Description: Something the user entered when they made this variation...</li>
//                                     <li>Resizable: No</li>
//                                     <li>Dimentions: W: 3.25 H: 1.75 inches</li>
//                                     <li>Colors:
//                                         <div className="d-inline-block">
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <button className="btn btn-sm" title="Copy the public link to this asset."><i className="fa fa-link"></i> Public</button>
//                                         <button className="btn btn-sm" title="Download the asset to your computer."><i className="fa fa-download"></i> Download</button>
//                                         <button className="btn btn-sm" title="View the preview for this asset in a new window."><i className="fa fa-file-image"></i> Preview</button>
//                                     </li>
//                                     </ul>
//                                 </div>
//                                 </div>
//                                 <div className="row border-bottom">
//                                 <div className="col align-self-center">
//                                     <img className="img-fluid" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83151" />
//                                 </div>
//                                 <div className="col">
//                                     <h4>Asset Id: 4548-2</h4>
//                                     <ul className="details quiet">
//                                     <li>Logo Type: Spot Color</li>
//                                     <li>Description: Something the user entered when they made this variation...</li>
//                                     <li>Colors:
//                                         <div className="d-inline-block">
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <button className="btn btn-sm" title="Copy the public link to this asset."><i className="fa fa-link"></i> Public</button>
//                                         <button className="btn btn-sm" title="Download the asset to your computer."><i className="fa fa-download"></i> Download</button>
//                                         <button className="btn btn-sm" title="View the preview for this asset in a new window."><i className="fa fa-file-image"></i> Preview</button>
//                                     </li>
//                                     </ul>
//                                 </div>
//                                 </div>
//                                 <div className="row border-bottom">
//                                 <div className="col align-self-center">
//                                     <img className="img-fluid" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83151" />
//                                 </div>
//                                 <div className="col">
//                                     <h4>Asset Id: 4548-3</h4>
//                                     <ul className="details quiet">
//                                     <li>Logo Type: Spot Color</li>
//                                     <li>Description: Something the user entered when they made this variation...</li>
//                                     <li>Colors:
//                                         <div className="d-inline-block">
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         <div className="swatch" > </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <button className="btn btn-sm" title="Copy the public link to this asset."><i className="fa fa-link"></i> Public</button>
//                                         <button className="btn btn-sm" title="Download the asset to your computer."><i className="fa fa-download"></i> Download</button>
//                                         <button className="btn btn-sm" title="View the preview for this asset in a new window."><i className="fa fa-file-image"></i> Preview</button>
//                                     </li>
//                                     </ul>
//                                 </div>
//                                 </div>
//                             </div>
//                             <div className="text-center m-t-10"><button className="btn btn-lg">Add Variation</button></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// } 




// class AssetItem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             modalVisibility: false
//         }
//         this.showModal = this.showModal.bind(this)
//     }

//     showModal = (e) => {
//         e.preventDefault()
        
//         this.setState({modalVisibility: true})
//     }

//     render() {
//         return (
//             <div>
//                 <div className="col-sm-6 col-md-4 col-lg-3">
//                     <div className="flip-container">
//                         <div className="front">
//                             <div className="asset-wrapper" onClick="window.location='asset_edit.html'">
//                                 <span className="vertical-helper"></span>
//                                 <img  className="" src={this.props.imgsrc} alt="" />
//                             </div>
//                             <div className="asset-title ng-binding">
//                                 <strong>{this.props.name}</strong>
//                                 <div className="row">
//                                     <div className="col">ID: {this.props.id}</div>
//                                     <div className="col text-right">Client: {this.props.client}</div>
//                                 </div>
//                                 <ul className="details quiet">
//                                     <li>Store: {this.props.store}</li>
//                                     <li>Asset Type: {this.props.type}</li>
//                                 </ul>
//                                 <h4 className="text-center">
//                                     <strong>
//                                         <a href="/#" data-toggle="modal" data-target="#asset_variations" title="View the versions of this asset." onClick={this.state.showModal}>{this.props.versions.length} Versions </a>
//                                          | 
//                                         <a href="/#" title="Add an additional versi`on to this asset."> Add</a>
//                                     </strong>
//                                 </h4>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="modal fade" id="asset_variations" tabindex="-1" role="dialog" aria-labelledby="asset_variations" aria-hidden="true" show={this.state.modalVisibility}>
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-body">
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">×</span>
//                             </button>
//                             <h2>
//                                 Go Daddy For Good (4548)
//                             </h2>
//                             <h4>Company Logo</h4>
//                             <div className="asset-list">
//                                 <div className="row border-bottom">
//                                 <div className="col align-self-center">
//                                     <img className="img-fluid" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83151" />
//                                 </div>
//                                 <div className="col">
//                                     <h4>Asset Id: 4548</h4>
//                                     <ul className="details quiet">
//                                     <li>Logo Type: Spot Color</li>
//                                     <li>Resizable: Yes</li>
//                                     <li>Description: Something the user entered when they made this variation...</li>
//                                     <li>Colors:
//                                         <div className="d-inline-block">
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(255, 255, 255);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(45, 41, 38);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(0, 177, 64);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(232, 119, 34);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(254, 221, 0);"> </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <button className="btn btn-sm"><i className="fa fa-link"></i> Public</button>
//                                         <button className="btn btn-sm"><i className="fa fa-download"></i> Download</button>
//                                         <button className="btn btn-sm"><i className="fa fa-file-image"></i> Preview</button>
//                                     </li>
//                                     </ul>
//                                 </div>
//                                 </div>
//                                 <div className="row border-bottom">
//                                 <div className="col align-self-center">
//                                     <img className="img-fluid" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83151" />
//                                 </div>
//                                 <div className="col">
//                                     <h4>Asset Id: 4548-1</h4>
//                                     <ul className="details quiet">
//                                     <li>Logo Type: Embroidery</li>
//                                     <li>Stitch Count: 10 SPI</li>
//                                     <li>Description: Something the user entered when they made this variation...</li>
//                                     <li>Resizable: No</li>
//                                     <li>Dimentions: W: 3.25 H: 1.75 inches</li>
//                                     <li>Colors:
//                                         <div className="d-inline-block">
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(255, 255, 255);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(45, 41, 38);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(0, 177, 64);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(232, 119, 34);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(254, 221, 0);"> </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <button className="btn btn-sm" title="Copy the public link to this asset."><i className="fa fa-link"></i> Public</button>
//                                         <button className="btn btn-sm" title="Download the asset to your computer."><i className="fa fa-download"></i> Download</button>
//                                         <button className="btn btn-sm" title="View the preview for this asset in a new window."><i className="fa fa-file-image"></i> Preview</button>
//                                     </li>
//                                     </ul>
//                                 </div>
//                                 </div>
//                                 <div className="row border-bottom">
//                                 <div className="col align-self-center">
//                                     <img className="img-fluid" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83151" />
//                                 </div>
//                                 <div className="col">
//                                     <h4>Asset Id: 4548-2</h4>
//                                     <ul className="details quiet">
//                                     <li>Logo Type: Spot Color</li>
//                                     <li>Description: Something the user entered when they made this variation...</li>
//                                     <li>Colors:
//                                         <div className="d-inline-block">
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(255, 255, 255);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(45, 41, 38);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(0, 177, 64);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(232, 119, 34);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(254, 221, 0);"> </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <button className="btn btn-sm" title="Copy the public link to this asset."><i className="fa fa-link"></i> Public</button>
//                                         <button className="btn btn-sm" title="Download the asset to your computer."><i className="fa fa-download"></i> Download</button>
//                                         <button className="btn btn-sm" title="View the preview for this asset in a new window."><i className="fa fa-file-image"></i> Preview</button>
//                                     </li>
//                                     </ul>
//                                 </div>
//                                 </div>
//                                 <div className="row border-bottom">
//                                 <div className="col align-self-center">
//                                     <img className="img-fluid" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83151" />
//                                 </div>
//                                 <div className="col">
//                                     <h4>Asset Id: 4548-3</h4>
//                                     <ul className="details quiet">
//                                     <li>Logo Type: Spot Color</li>
//                                     <li>Description: Something the user entered when they made this variation...</li>
//                                     <li>Colors:
//                                         <div className="d-inline-block">
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(255, 255, 255);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(45, 41, 38);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(0, 177, 64);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(232, 119, 34);"> </div>
//                                         <div className="swatch" ng-style="{ backgroundColor: color.Hex }" style="background-color: rgb(254, 221, 0);"> </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <button className="btn btn-sm" title="Copy the public link to this asset."><i className="fa fa-link"></i> Public</button>
//                                         <button className="btn btn-sm" title="Download the asset to your computer."><i className="fa fa-download"></i> Download</button>
//                                         <button className="btn btn-sm" title="View the preview for this asset in a new window."><i className="fa fa-file-image"></i> Preview</button>
//                                     </li>
//                                     </ul>
//                                 </div>
//                                 </div>
//                             </div>
//                             <div className="text-center m-t-10"><button className="btn btn-lg">Add Variation</button></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// } 




