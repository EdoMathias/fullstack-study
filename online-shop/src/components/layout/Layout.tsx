import style from './layout.module.css';

export const Layout = () => {
  return (
    <div className={style.layout}>
      <div className={style.header}>Header</div>
      <div className={style.sidebar}>Sidebar</div>
      <div className={style.main}>Main</div>
      <div className={style.footer}>Footer</div>
    </div>
  );
};
