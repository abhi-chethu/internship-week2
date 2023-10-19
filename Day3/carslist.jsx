import React from 'react';

const CardList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="C:\Users\prajw\OneDrive\Desktop\ABHI\Week 2\Day3\react-app\src\Component\antman.webp" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is the first card.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="C:\Users\prajw\OneDrive\Desktop\ABHI\Week 2\Day3\react-app\src\Component\black.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is the second card.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="C:\Users\prajw\OneDrive\Desktop\ABHI\Week 2\Day3\react-app\src\Component\spider.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">This is the third card.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
