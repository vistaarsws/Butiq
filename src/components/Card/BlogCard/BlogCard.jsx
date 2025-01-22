import "./BlogCard.css";
import PropTypes from "prop-types";

export default function BlogCard({ title, description, time, picture, tags }) {
  const shortner = (para = description) => {
    if (para.length > 180) {
      return para.slice(0, 180) + "...";
    } else {
      return para;
    }
  };

  const shortenPara = shortner();

  return (
    <article className="article">
      <div className="card">
        <figure className="figure">
          <img src={picture} className="image" alt="" />
        </figure>
        <div className="content">
          <time className="time" dateTime="2019-06-29">
            {time}
          </time>
          <div className="tags">
            {tags.map((tag, index) => {
              return (
                <span key={index} className="tag">
                  {tag}
                </span>
              );
            })}
          </div>
          <a href="#" className="title-link">
            <h3 className="title">{title}</h3>
          </a>
          <p className="description">{shortenPara}</p>
        </div>
      </div>
    </article>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  picture: PropTypes.string,
  tags: PropTypes.array,
};
