import React from "react"

const AssetsList = () => {
    return (
        <div className="main-content container-fluid">
        <div className="row ng-scope d-flex flex-wrap" ng-if="assets.length > 0">
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="flip-container">
                <div className="front">
                    <div className="asset-wrapper" onClick="window.location='asset_edit.html'">
                        <span className="vertical-helper"></span>
                        <img  className="" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83151" alt="" />
                    </div>
                    <div className="asset-title ng-binding">
                        <strong>Go Daddy For Good</strong>
                        <div className="row">
                            <div className="col">ID: 4816</div>
                            <div className="col text-right">Client: GDY</div>
                        </div>
                        <ul className="details quiet">
                            <li>Store: GoDaddy 1</li>
                            <li>Asset Type: Company Logo</li>
                        </ul>
                        <h4 className="text-center">
                            <strong><a href="/#" data-toggle="modal" data-target="#asset_variations" title="View the versions of this asset.">4 Versions</a> | <a href="/#" title="Add an additional versi`on to this asset.">Add</a></strong>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 asset-card">
            <div className="flip-container">
                <div className="front">
                    <div className="asset-wrapper" onClick="window.location='asset_detail.html'">
                        <span className="vertical-helper"></span>
                        <img  className="" src="assets/img/adobe-pdf-icon.png" alt="" />
                    </div>
                    <div className="asset-title ng-binding">
                        <strong>Marketing Guide</strong>
                        <div className="row">
                            <div className="col">ID: 4844</div>
                            <div className="col text-right">Client: GDY</div>
                        </div>
                        <ul className="details quiet">
                            <li>Store: GoDaddy 1</li>
                            <li>Asset Type: Style Guide</li>
                        </ul>
                        <h4 className="text-center">
                            <strong><a href="/#" data-toggle="modal" data-target="#asset_variations" title="View the versions of this asset.">1 Version</a> | <a href="/#" title="Add an additional versi`on to this asset.">Add</a></strong>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 asset-card">
            <div className="flip-container">
                <div className="front">
                    <div className="asset-wrapper" onClick="window.location='asset_detail.html'">
                        <span className="vertical-helper"></span>
                        <img  className="" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83154" alt="" />
                    </div>
                    <div className="asset-title ng-binding">
                        <strong>Box Labels</strong>
                        <div className="row">
                            <div className="col">ID: 4816</div>
                            <div className="col text-right">Client: GDY</div>
                        </div>
                        <ul className="details quiet">
                            <li>Store: GoDaddy 1</li>
                            <li>Asset Type: Company Logo</li>
                        </ul>
                        <h4 className="text-center">
                            <strong><a href="/#" data-toggle="modal" data-target="#asset_variations" title="View the versions of this asset.">1 Version</a> | <a href="/#" title="Add an additional versi`on to this asset.">Add</a></strong>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 asset-card">
            <div className="flip-container">
                <div className="front">
                    <div className="asset-wrapper" onClick="window.location='asset_detail.html'">
                        <span className="vertical-helper"></span>
                        <img  className="" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83150" alt="" />
                    </div>
                    <div className="asset-title ng-binding">
                        <strong>GDY Machine Learning</strong>
                        <div className="row">
                            <div className="col">ID: 4800</div>
                            <div className="col text-right">Client: GDY</div>
                        </div>
                        <ul className="details quiet">
                            <li>Store: GoDaddy 1</li>
                            <li>Asset Type: Company Logo</li>
                        </ul>
                        <h4 className="text-center">
                            <strong><a href="/#" data-toggle="modal" data-target="#asset_variations" title="View the versions of this asset.">2 Versions</a> | <a href="/#" title="Add an additional versi`on to this asset.">Add</a></strong>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 asset-card">
            <div className="flip-container">
                <div className="front">
                    <div className="asset-wrapper" onClick="window.location='asset_detail.html'">
                        <span className="vertical-helper"></span>
                        <img  className="" src="https://soflo.ecompanystore.com/Api/Attachment/Thumbnail/83156" alt="" />
                    </div>
                    <div className="asset-title ng-binding">
                        <strong>GDY Smyrna 8</strong>
                        <div className="row">
                            <div className="col">ID: 4816</div>
                            <div className="col text-right">Client: GDY</div>
                        </div>
                        <ul className="details quiet">
                            <li>Store: GoDaddy 1</li>
                            <li>Asset Type: Company Logo</li>
                        </ul>
                            <h4 className="text-center">
                            <strong><a href="/#" data-toggle="modal" data-target="#asset_variations" title="View the versions of this asset.">1 Version</a> | <a href="/#" title="Add an additional versi`on to this asset.">Add</a></strong>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        
    )
    
}

export default AssetsList