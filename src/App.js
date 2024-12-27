import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "New Post",
      body: "This is a new post.",
      userId: 1,
    })
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((error) => console.error("Error creating post:", error));
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="">

    </div>
  );
}

export default App;
