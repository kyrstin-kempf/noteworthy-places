import { useState, useEffect } from "react";

function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("/hello")
        .then((r) => r.json())
        .then((data) => setCount(data.count));
    }, []);

  return (
    <h1>Home</h1>,
    <h2>Page Count: {count}</h2>
  );
}

export default Home;