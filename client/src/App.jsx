import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<AllRooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
    </Routes>
  );
};

export default App;
