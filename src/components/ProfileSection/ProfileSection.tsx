import classes from "./ProfileSection.module.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { IUSer } from "../../models/User";

type Props = {};

function ProfileSection({}: Props) {
  const store = useContext(Context).stores.authStore;
  const [user, setUser] = useState<IUSer>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  useEffect(() => {
    const localUserString: string | null = localStorage.getItem("user");
    
    if (localUserString) {
      const localUser: IUSer = JSON.parse(localUserString);
  
      setUser({
        email: localUser.email,
        firstname: localUser.firstname,
        lastname: localUser.lastname,
        password: localUser.password,
      });
    }
  }, []);
  
  return (
    <div className={classes.ProfileSection}>
      <h1>My Profile</h1>
      <div>
        <div className={classes.img}></div>
        <div>
          <span>
            {user.firstname} {user.lastname}
          </span>
          <span>{user.email}</span>
        </div>
        <div>
          <button>Edit</button>
          <button onClick={store.logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default observer(ProfileSection);
