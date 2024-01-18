import React from "react";
import styles from "./Profile.module.scss"
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import ProfileWidget from "../../components/ProfileWidget/ProfileWidget";

const Profile: React.FC = () => {
    return (
        <div className={styles.Profile}>
            <ProfileSection/>
            {/* <ProfileWidget/> */}
        </div>
    )
}
export default Profile;