import React, { useState, useEffect } from "react";

export default function SWMovies() {
  const numArr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <h1>Pick a Movie</h1>
      <select name="" id="">
        <option value="">Pick a Movie</option>
        {numArr.map((num, index) => {
          return (
            <option key={index} value={num}>
              {num}
            </option>
          );
        })}
      </select>
    </div>
  );
}
