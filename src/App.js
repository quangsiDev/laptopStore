import React, { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import AdminTemplate from "./Page/AdminTemplate";
import ListLapTop from "./Page/ListLapTop";
import { laptopsData } from "./data/LapTop";
export default function App() {
  const [laptops, setLaptops] = useState(laptopsData);
  const [editedLaptop, setLaptopEdit] = useState(laptops[3]);
  console.log("laptopsData", laptops);
  return (
    <BrowserRouter>
      <Switch>
        <AdminTemplate
          laptops={laptops}
          Component={() => (
            <ListLapTop
              setLaptopEdit={setLaptopEdit}
              editedLaptop={editedLaptop}
              laptops={laptops}
              setLaptops={setLaptops}
            />
          )}
          path="/"
        ></AdminTemplate>
      </Switch>
    </BrowserRouter>
  );
}
