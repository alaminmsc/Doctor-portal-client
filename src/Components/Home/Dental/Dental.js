import React from "react";
import dental from "../../../images/dental.png";

const Dental = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
            <img src={dental} alt="" width="100%"></img>
        </div>
        <div className="col-md-5 p-4">
          <h2>
            Exceptional Dental <br></br>Care, on Your Terms
          </h2>
          <br></br>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using lorem ipsums is that it has a more-or-less normal
            distribution of letters, as opposed to using lorem ipsumis.
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using lorem ipsums is that it has a more-or-less normal
            distribution of letters, as opposed to using lorem ipsumis.
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using lorem ipsums is that it has a more-or-less normal
            distribution of letters, as opposed to using lorem ipsumis.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Dental;
