import React from "react";
import styles from "./Profile.module.scss"
import ProfileSection from "../../components/ProfileSection/ProfileSection";

const Profile: React.FC = () => {
    return (
        <div className={styles.Profile}>
            <ProfileSection/>
        </div>
    )
}
export default Profile;