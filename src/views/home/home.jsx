import { useEffect, useState } from "react";
import triggerAuthorizationFlow from "../../api/authorization";
import styles from "./home.module.css";
import useAuthStore from "../../store/auth";
import fetchProfile from "../../fetchprofile/fetchProfile";

export const Home = () => {
  const [profile, setProfile] = useState(null);
  const { accessToken, setAccessToken } = useAuthStore();
  useEffect(() => {
    if (accessToken !== null) {
      console.log(accessToken);
      fetchProfile(accessToken)
        .then((res) => {
          console.log(profile);
          console.log(res);
          setProfile(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [accessToken]);
  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <>
      {profile === null ? (
        <div className={styles.container}>
          <div>Get started with Muzhic</div>
          <button type="button" onClick={triggerAuthorizationFlow}>
            Authorize
          </button>
        </div>
      ) : (
        <>
          <h1>User Info</h1>
          <h3>Name: {profile !== null && profile.display_name}</h3>
          <h3>Email: {profile !== null && profile.email}</h3>
        </>
      )}
    </>
  );
};
