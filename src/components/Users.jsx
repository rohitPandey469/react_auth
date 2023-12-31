import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import{ PulseLoader} from "react-spinners";

const Users = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        });
        const userNames = response.data.map((user) => user.username);
        isMounted && setUsers(userNames);
      } catch (err) {
        console.error(err);
        if (!err.code == "ERR_CANCELED")
          navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getUsers();

    // cleanup - runs when the component unmounts
    return () => {
      isMounted = false;
      controller.abort(); // cancel any request i.e. pending
    };
  }, []);
  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <PulseLoader color={"#FFF"} />
      )}
    </article>
  );
};

export default Users;
