import "./App.css";
import axios from "axios";

function App() {
  axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=falsey"
    )
    .then((data)=>{
      console.log(data.data)
    })
    .catch((error)=>{
      console.log("first")
      console.log(error)
    });
  return <div className="App">Hello World</div>;
}

export default App;