import React from "react"

class Versions extends React.Component {
  render() {

    const colors = this.props.colors.map((color, i) => {
      return(<div key={i} className="swatch" style={{backgroundColor: color}}></div>)
    })

    return (
      <div className="asset-list">
        <div className="row border-bottom">
          <div className="col align-self-center">
            <img className="img-fluid" src={this.props.imgsrc} alt=""></img>
          </div>
          <div className="col">
            <h4>Asset Id: {this.props.id}</h4>
            <ul className="details quiet">
              <li>Logo Type: {this.props.logoType}</li>
              {this.props.stitchCount && <li>Stitch Count: {this.props.stitchCount}</li>}
              <li>Resizable: 
                {this.props.isResizable ? " Yes" : " No"}
              </li>
              {this.props.sizeDimension 
                && 
                <li>Dimensions: W: {this.props.sizeWidth}, H: {this.props.sizeHeight} {this.props.sizeDimension}</li>
              }
              <li>Description: {this.props.description}</li>
              <li>Colors: 
                <div className="d-inline-block">
                  {colors}
                </div>
              </li>
              <li>
                <button className="btn btn-sm"><i className="fa fa-link"></i> Public</button>
                <button className="btn btn-sm"><i className="fa fa-download"></i> Download</button>
                <button className="btn btn-sm"><i className="fa fa-file-image"></i> Preview</button>
              </li>
            </ul>
          </div>
        </div>     
      </div>
    )
  }
}


export default Versions



