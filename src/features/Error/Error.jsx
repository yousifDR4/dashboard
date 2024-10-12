import { useDispatch, useSelector } from "react-redux";
import classes from "./Error.module.css";
import { errorActions } from "../../store/error";
// eslint-disable-next-line react/prop-types
export default function Error({ children }) {
  console.log("Error");

  const dispatch = useDispatch();
  const title1 = useSelector((state) => state.error.title);
  const message2 = useSelector((state) => state.error.message);
  const title = "title1";
  const message = "message2";
  const clickHanlder = () => {
    dispatch(errorActions.hideError());
  };
  if (title) {
    return (
      <div>
        <div className={classes.modal}>
          <header className={classes.header}>
            <h2>{title}</h2>
          </header>
          <div className={classes.content}>
            <p>{message}</p>
          </div>
          <footer className={classes.actions}>
            <button onClick={clickHanlder} className={classes.button}>
              Ok
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
