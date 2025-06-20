import css from "./HomePage.module.css";

export default function HomePage() {
    return (
      <div className={css.container}>
        <h3 className={css.title}>Welcome to home page🪄</h3>
        <p className={css.subtitle}>
          This web application offers a secure and intuitive platform for users
          to create an account or log in to their personal workspace. Once
          logged in, users can efficiently manage their contact list — including
          adding new contacts with relevant details, searching by name, and
          removing unnecessary entries. Designed with a clean interface and
          responsive design, the app ensures a smooth experience across devices,
          making it easy to keep your important connections organized and
          accessible anytime.
        </p>
      </div>
    );
}