import React from "react";

export default function NewsItem(props) {
  let { title, describtion, imgUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="my-3">
        <div className="card">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-03/1a1e4499-92fc-4a4d-bb08-e4153bfe3e2d.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span
              className="position-absolute top-0  badge rounded-pill bg-danger"
              style={{
                zIndex: "1",
                transform: "translate(0%,-50%)",
                right: "0",
              }}
            >
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{describtion}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknow" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
