import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import { getCategory } from "../Redux/action/getCategory";

const Nav = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.category);
  const { category } = categoryList;
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <nav className="nav_item">
      {category.length ? (
        category.map((item, index) => {
          return (
            <Link to={`/category/${item.id}`} keys={index}>
              {item.name}
            </Link>
          );
        })
      ) : (
        <p>loadinng</p>
      )}
    </nav>
  );
};

export default Nav;
