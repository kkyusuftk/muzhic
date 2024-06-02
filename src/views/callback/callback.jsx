import { useEffect } from "react";
import getToken from "../../api/accessToken";
import useAuthStore from "../../store/auth";
import { useNavigate } from "react-router-dom";

export const Callback = () => {
  const { accessToken, setAccessToken } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    getToken(code).then((data) => {
      console.log(data);
      console.log(data.access_token);
      setAccessToken(data.access_token);
      navigate("/");
    });
  }, []);

  return <div>Callback</div>;
};
