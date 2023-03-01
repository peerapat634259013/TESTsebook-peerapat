import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const BookList = () => {
  const [bookData, setBookData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books"
      )
      .then((res) => {
        console.log(res);
        setBookData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loadEdit = (isbn) => {
    navigate("/book/edit/" + isbn);
  };
  const loadDetail = (isbn) => {
    navigate("/book/detail/" + isbn);
  };
  const removeBook = (isbn) => {
    if (window.confirm("Do you want to delete this employee?")) {
      axios
        .delete(
          "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books/" +
            isbn
        )
        .then((res) => {
          alert("Remove successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
 return (
   <div className="container">
     <div className="card"></div>
     <div className="card-body">
       <Link
         to="/employee/create"
         className="btn btn-success"
         style={{ float: "left" }}
       >
         Add new (+)
       </Link>
       <div className="card">
         <div className="card-title">
           <h2>Book List</h2>
         </div>
         <div className="card-body">
           <table className="table table-bordered">
             <tbody>
               {bookData &&
                 bookData.map((item) => {
                   //ตั้งค่าตรง item ชื่ออะไรก็ได้
                   //console.log(item);
                   return (
                     <div class="container">
                       <div class="row-md-4">
                         <div class="col-md-3">
                           <div class="card key={item.isbn}">
                             <div class="card-body">
                               <h5 class="card-title">
                                 ชื่อหนังสือ : {item.title}
                               </h5>
                               <img src={item.thumbnailUrl}></img>
                               <p class="card-text">ผู้แต่ง : {item.authors}</p>
                               <h8>ประเภทหนังสือ : {item.categories}</h8>
                               <br />
                               <a href="#" class="btn btn-primary">
                                 VIEW MORE
                               </a>
                               <a href="#" class="btn btn-danger">
                                 EDIT
                               </a>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   );
                 })}
             </tbody>
           </table>
         </div>
       </div>
     </div>
   </div>
 );}

export default BookList;

