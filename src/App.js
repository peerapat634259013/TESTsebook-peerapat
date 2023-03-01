import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookCreate, BookDetail, BookEdit, BookList } from "./pages";

function App() {
  return (
    <div className="Book">
      <h2>SE Book Store</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/create" element={<BookCreate />} />
          <Route path="/books/detail/:ISBN" element={<BookDetail />} />
          <Route path="/books/edit/:ISBN" element={<BookEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



