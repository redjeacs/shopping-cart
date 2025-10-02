import { Link } from "react-router";
import styles from "./error.module.css";
import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorPage}>
      <h1>Oh no!</h1>
      <p>an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className={styles.link} to="/">
        Click here to return to home page
      </Link>
    </div>
  );
}

export default ErrorPage;
