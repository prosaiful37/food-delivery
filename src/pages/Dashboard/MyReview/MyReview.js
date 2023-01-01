import React, { useState } from "react";
import reviewImg from "../../../Images/reviews-image/review.jpg";
import { toast } from "react-toastify";

const MyReview = () => {
  const handleReviews = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const title = e.target.title.value;
    const image = e.target.image_url.value;
    const description = e.target.description.value;

    const addReview = {
      name,
      title,
      image,
      description,
    };

    fetch("https://food-delivery-20mn.onrender.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast("Reviews added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="my-10">
      <div className="grid md:grid-cols-2 shadow">
        <div className="p-5">
          <form onSubmit={handleReviews} action="">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                class="input input-bordered"
                name="name"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                class="input input-bordered"
                name="title"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Image Url</span>
              </label>
              <input
                type="Image url"
                placeholder="Image url"
                class="input input-bordered"
                name="image_url"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                name="description"
                class="textarea textarea-bordered"
                placeholder="message"
              ></textarea>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary font-sans">Add</button>
            </div>
          </form>
        </div>
        <div>
          <img src={reviewImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyReview;
