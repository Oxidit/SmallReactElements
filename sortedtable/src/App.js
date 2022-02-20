import "./styles.css";

import { Table } from "./Table";

export default function App() {
  return (
    <div className="App">
      <h1>Таблица</h1>
      <Table
        data={[
          { id: 1, name: "Leanne Graham", phone: 464763369, suite: 5 },
          { id: 2, name: "Ervin Howell", phone: 123453989, suite: 12 },
          { id: 3, name: "Clementine Bauch", phone: 276384930, suite: 1 },
          { id: 4, name: "Patricia Lebsack", phone: 326359849, suite: 9 },
          { id: 5, name: "Mrs. Dennis Schulist", phone: 584561759, suite: 2 },
          { id: 6, name: "Kurtis Weissnat ", phone: 254730829, suite: 6 },
          {
            id: 7,
            name: "Nicholas Runolfsdottir V",
            phone: 998726539,
            suite: 11
          },
          { id: 8, name: "Glenna Reichert", phone: 994736539, suite: 7 }
        ]}
      />
    </div>
  );
}
