import style from './Card.module.css';

interface CardProps {
  header: string;
  imageUrl: string;
  moreInfoLink: string;
}

export const Card = ({ header, moreInfoLink, imageUrl }: CardProps) => {
  return (
    <div className={style.card}>
      <h2 className={style.header}>{header}</h2>
      <div>
        <img className={style.image} src={imageUrl} />
      </div>
      <div>
        <a href={moreInfoLink} target="_blank">
          More info
        </a>
      </div>
    </div>
  );
};
