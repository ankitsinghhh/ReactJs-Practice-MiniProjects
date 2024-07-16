import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
  
  <div class="px-4 py-5  text-center flex flex-col gap-7 justify-center items-center h-[calc(100vh-65.6px)] box-border  ">
    <img src="/main.png" alt="main" width={330} />
    <h1 class="text-5xl font-bold">Hello People</h1>
    <div class="max-w-lg mx-auto">
      <p class="text-lg mb-4">
        Quickly design and customize responsive mobile-first sites with
        Tailwind CSS, a utility-first CSS framework packed with classes like
        flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
      </p>
      <div class="grid gap-2 sm:flex sm:justify-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3 bg-blue-500 text-white py-2 rounded-lg">
          Getting Started
        </button>
      <Link to="/contact">
      <button type="button" class="btn btn-outline-secondary btn-lg px-4 border border-gray-300 py-2 rounded-lg">
          Contact-Us
        </button>
      </Link>
      </div>
    </div>
  </div>
  );
};

export default Home;
