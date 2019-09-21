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
        const versions =this.props.versions.map((version) => 
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
                            <div className="asset-wrapper" >
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
                        <div className="text-center m-t-10"><Button className="btn btn-lg">Add Variation</Button></div>
                        </Modal.Footer>
                    </Modal>
                </div> 
        )
    }
}

export default AssetItem






