import css from './user.module.css';
import PropTypes from 'prop-types';



const User = ({ items }) => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.profile}>
          <div className="description">
            <img src={items.avatar} alt="User avatar" className={css.avatar} />
            <p className="name">{items.username}</p>
            <p className="tag">@{items.tag}</p>
            <p className="location">{items.location}</p>
          </div>

          <ul className={css.stats}>
            <li>
              <span className="label">Followers</span>
              <span className="quantity">{items.stats.followers}</span>
            </li>
            <li>
              <span className="label">Views</span>
              <span className="quantity">{items.stats.views}</span>
            </li>
            <li>
              <span className="label">Likes</span>
              <span className="quantity">{items.stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default User;

User.defaultProps = {
  items: [],
};

User.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    })
  ),
};
