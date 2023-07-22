import { Fragment } from "react";

const IntroBanner = ({ title, paragraphs }) => {
  return (
    <div className="intro-wrapper">
      <div className="intro-desc">
        <h2>{title}</h2>

        {paragraphs.length > 0 &&
          paragraphs.map((paragraph, idx) => {
            return (
              <Fragment key={idx}>
                <p className="intro-desc-para">{paragraph}</p>
                <br />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};
export default IntroBanner;
