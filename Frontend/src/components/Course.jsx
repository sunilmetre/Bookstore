import React, { useEffect, useState } from "react";
import axios from "axios";

// import list from "../../public/List.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category !== "Free")
        console.log(res.data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-14">
        <div className="mt-[68px] items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            He're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            delectus facilis? Ut voluptatibus ratione natus quia aut similique
            perferendis necessitatibus, doloremque voluptates et perspiciatis
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            delectus facilis? Ut voluptatibus ratione natus quia aut similique
            perferendis necessitatibus, doloremque voluptates et perspiciatis
            veritatis!
          </p>
          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
