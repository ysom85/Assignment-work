import { Box, Button, Typography, styled } from "@mui/material";
import logo from "./logo.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
// import image1 from "./Photos/download.jpeg";
// import image2 from "./Photos/download.jpeg";
// import image3 from "./Photos/download.jpeg";
// import image4 from "./Photos/download.jpeg";
// import image5 from "./Photos/download.jpeg";

// import axios from "axios"
// import Background from "./components/Background.jsx";
let locationName = "New York";
let Temprature = 21;
let wind = 6.1;
//khujghk
let precip = 0.09;
let Pressure = 1025.0;
let WhetherName = "Partly Coudy";
function App() {
  const [data, setData] = useState([
    {
      dt: 1688785200,
      main: {              
        temp: 304.91,
        feels_like: 310.87,
        temp_min: 304.91,
        temp_max: 304.91,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 990,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 7.43,
        deg: 106,
        gust: 9.56,
      },
      visibility: 10000,
      pop: 0.3,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-08 03:00:00",
    },
    {
      dt: 1688871600,
      main: {
        temp: 306.32,
        feels_like: 312.74,
        temp_min: 306.32,
        temp_max: 306.32,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 989,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 4.36,
        deg: 119,
        gust: 5.24,
      },
      visibility: 10000,
      pop: 0.37,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-09 03:00:00",
    },
    {
      dt: 1688958000,
      main: {
        temp: 305.64,
        feels_like: 312.07,
        temp_min: 305.64,
        temp_max: 305.64,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 988,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 1.57,
        deg: 62,
        gust: 1.77,
      },
      visibility: 10000,
      pop: 0.96,
      rain: {
        "3h": 1.58,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-10 03:00:00",
    },
    {
      dt: 1689044400,
      main: {
        temp: 299.65,
        feels_like: 299.65,
        temp_min: 299.65,
        temp_max: 299.65,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 987,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.14,
        deg: 90,
        gust: 3.99,
      },
      visibility: 3760,
      pop: 1,
      rain: {
        "3h": 39.29,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-11 03:00:00",
    },
    {
      dt: 1689130800,
      main: {
        temp: 302.57,
        feels_like: 308.37,
        temp_min: 302.57,
        temp_max: 302.57,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 987,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 5.56,
        deg: 99,
        gust: 6.62,
      },
      visibility: 10000,
      pop: 0.94,
      rain: {
        "3h": 1.97,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-12 03:00:00",
    },
  ]);
  
  const [city, setCity] = useState({});
  const [name, setName] = useState("Delhi");
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name);
      axios
        .post(
          `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=946445c059a1538bdd9b313f555d991b`
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setCity(response.data.city);
            const result = response.data.list.filter(dataset);
            setData(result);
            console.log(data);
          } else {
            console.log("Error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
  };
  
  useEffect(() => {
    let lat = 28.4900967;
    let lon = 77.0678225;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          // const {data} = await axios.post(`${server}/users/new`,{ lat, lon},{headers: {"Content-Type":"application/json"}, withCredentials: true,})
          console.log(position.coords.latitude, position.coords.longitude);
        },

        (err) => {
          alert(err.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
    console.log(lat, lon);
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=946445c059a1538bdd9b313f555d991b`
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setCity(response.data.city);
          const result = response.data.list.filter(dataset);
          setData(result);
          console.log(data);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const openDialog = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          // const {data} = await axios.post(`${server}/users/new`,{ lat, lon},{headers: {"Content-Type":"application/json"}, withCredentials: true,})
          console.log(position.coords.latitude, position.coords.longitude);
        },

        (err) => {
          alert(err.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };
  const dataset = (data) => {
    return data.dt_txt.slice(11, 13) === "03";
  };

  return (
    <div className="Background">
      <div className="mainWindow">
        <form onSubmit={submitHandler}>
          <label>
            Enter your City name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
            <button type="submit">ok</button>
          </label>
        </form>

        {city.name !== undefined ? (
          <div className="location">
            {city.name} {city.country}
          </div>
        ) : null}
        <div className="middlePortion">
          {data !== [] ? (
            <div className="left">
              <img
                src={`https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`}
              />
              <div className="whetherDis">{data[0].weather[0].description}</div>
            </div>
          ) : null}

          <div className="centre">
            {(data[0].main.temp - 273).toFixed(2)} Degree C
          </div>
          <div className="right">
            <div>Wind: {data[0].wind.speed} Kmph</div>
            <div>Precip: {data[0].pop} mm</div>
            <div>Pressure: {data[0].main.pressure} mb</div>
          </div>
        </div>
        <div className="endPosition">
          {data.map((c, index) => (
            <div className={`img${index + 1}`}>
              {c.weather !== undefined ? (
                <img
                  margin="auto"
                  width="75"
                  src={`https://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`}
                />
              ) : null}
              <diV style={{ fontSize: 10 }}>
                {(c.main.temp - 273).toFixed(2)}
              </diV>
            </div>
          ))}
          {/* <div className="img1">
            <img margin="auto" width="75" src={image1} />
            <diV>Temp1</diV>
          </div>
          <div className="img2">
            <img margin="auto" width="75" src={image2} />
            <div>Temp2</div>
          </div>
          <div className="img3">
            <img margin="auto" width="75" src={image3} />
            <div>Temp3</div>
          </div>
          <div className="img4">
            <img margin="auto" width="75" src={image4} />
            <div>Temp4</div>
          </div>
          <div className="img5">
            <img margin="auto" width="75" src={image5} />
            <div>Temp5</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
