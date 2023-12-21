import { Link } from "react-router-dom";
import classes from "./ProfileSection.module.scss";

type Props = {};

export default function ProfileSection({}: Props) {
  return (
    <div className={classes.ProfileSection}>
      <h1>My Profile</h1>
      <div>
        <div className={classes.img}></div>
        <div>
          <span>Keanu Reeves</span>
          <span>neo@gmail.com</span>
        </div>
        <div>
          <Link to={"profile/edit"}>Edit</Link>
          <Link to={"profile/edit"}>Logout</Link>
        </div>
      </div>
    </div>
  );
}
