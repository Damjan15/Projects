import cardStyles from "../styles/Card.module.css";

const Card = ({ link, image, title, author }) => {

   // Truncate string
  const truncate = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + "...";
  };

  return (
    <div className={cardStyles.wrapper}>
      <a href={link} target="_blank">
        <div className={cardStyles.imageHolder}>
          <img src={image} alt="" />
        </div>
        <div className={cardStyles.content}>
          <h3 className={cardStyles.title}>{truncate(title, 48)}</h3>
          <p className={cardStyles.author}>{author}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
