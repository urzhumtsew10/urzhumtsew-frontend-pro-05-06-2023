import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./UsersList";
import AlbumsList from "./AlbumsLIst";
import Photos from "./Photos";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path=":id/album" element={<AlbumsList />} />
      <Route path=":id/album/:id/photos" element={<Photos />} />
    </Routes>
  );
};

export default App;
