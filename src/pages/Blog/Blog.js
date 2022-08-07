import React from "react";

const Blog = () => {
  return (
    <div class="hero min-h-screen bg-base-10">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Comming Soon !! </h1>
          <p class="py-6 font-sans">Our Blog site under construction</p>
          <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span class="countdown font-mono text-5xl">
                <span style={{"--value":"15"}}></span>
              </span>
              days
            </div>
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span class="countdown font-mono text-5xl">
                <span style={{"--value":"10"}}></span>
              </span>
              hours
            </div>
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span class="countdown font-mono text-5xl">
                <span style={{"--value": '24'}}></span>
              </span>
              min
            </div>
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span class="countdown font-mono text-5xl">
                <span style={{"--value":"40"}}></span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
