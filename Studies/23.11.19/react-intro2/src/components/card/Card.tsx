import style from './Card.module.css';

interface CardProps {
  header: string;
  //   content: string;
  footer: string;
  children: React.ReactNode;
}

export const Card = ({ header, children, footer }: CardProps) => {
  return (
    <div className={style.card}>
      <h2 className={style.header}>{header}</h2>
      <div>{children}</div>
      <div className={style.footer}>{footer}</div>
    </div>
  );
};
