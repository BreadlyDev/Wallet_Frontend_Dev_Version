import React from "react";
import styles from "./Profile.module.scss"

const Profile: React.FC = () => {
    return (
        <div className={styles.Profile}>
            <div className={styles.userInfoCard}>
                <img
                    src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette.png"
                    alt="user"
                    width="60px"
                    height="60px"
                />
                <h3>
                   user name
                </h3>
                <p>user email</p>
                <button className={styles.btn} >
                    LogOut
                </button>
            </div>
        </div>
    )
}
export default Profile;