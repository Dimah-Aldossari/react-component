import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Read() {
  const [userName, setUserName] = useState([]);
  let url = "https://66e7e69ab17821a9d9da6e9d.mockapi.io/post";
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(url).then((res) => {
      setUserName(res.data);
    });
  };
  const onDelete = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      let del = userName.filter((deletee) => deletee.id != id);
      setUserName(del);
      //   getData();
    });
  };
  return (
    <div>
      <ul>
        {userName.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.userName}</li>
              <button
                onClick={() => {
                  onDelete(item.id);
                }}
              >
                delete
              </button>
              <Link to={`/Update/${item.id}`}>
                <button type="button">ubdate</button>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Read;
