import React from "react"

const AssetItem = ({id, name, client, store, type, imgsrc, versions}) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="flip-container">
                <div className="front">
                    <div className="asset-wrapper" onClick="window.location='asset_edit.html'">
                        <span className="vertical-helper"></span>
                        <img  className="" src={imgsrc} alt="" />
                    </div>
                    <div className="asset-title ng-binding">
                        <strong>{name}</strong>
                        <div className="row">
                            <div className="col">ID: {id}</div>
                            <div className="col text-right">Client: {client}</div>
                        </div>
                        <ul className="details quiet">
                            <li>Store: {store}</li>
                            <li>Asset Type: {type}</li>
                        </ul>
                        <h4 className="text-center">
                            <strong><a href="/#" data-toggle="modal" data-target="#asset_variations" title="View the versions of this asset.">4 Versions</a> | <a href="/#" title="Add an additional versi`on to this asset.">Add</a></strong>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssetItem