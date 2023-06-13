import React,{useEffect,useState,Link} from 'react';
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
export default function Home() {
    const [data, setData] = useState([]);
    const getData = async () => {
      const { data } = await axios.get("http://localhost:3003/movies-home");
      console.log('movie',data);
      let tempArray = []
      data.map((movie, index)=>{
          tempArray.push({
              label : "image"+index,
              alt : "image"+index,
              url : movie.image,
          })
      })
      console.log(tempArray);
      setData(tempArray);
    };
    useEffect(() => {
      getData();
    }, []);
    const renderSlides = data.map((image) => (
        <div key={image.alt}>
          <img src={image.url} alt={image.alt} />
          <p className="legend">{image.label}</p>
        </div>
      ));
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="App">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={data[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}