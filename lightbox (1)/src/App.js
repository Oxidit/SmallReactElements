import "./styles.css";
import { Lightbox } from "./Lightbox";

export default function App() {
  return (
    <div className="App">
      <Lightbox
        images={[
          {
            thumb: "https://placekitten.com/170/100",
            normal: "https://placekitten.com/600/300"
          },
          {
            thumb: "https://placekitten.com/150/100",
            normal: "https://placekitten.com/300/300"
          },
          {
            thumb: "https://placekitten.com/160/100",
            normal: "https://placekitten.com/580/280"
          }
        ]}
      />
    </div>
  );
}
