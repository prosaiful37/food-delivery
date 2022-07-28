import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);


  return (
    <div class="hero py-5">
      <div class="hero-content text-center">
        <div class="">
          <h6 class="text-2xl font-bold text-primary">Our Backbone</h6>
          <h6 class="text-5xl font-bold">Customer Testimonials</h6>
          <p class="py-6 font-sans ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {reviews.slice(0, 3).map((review) => (
              <Review key={review.id} review={review}></Review>
            ))}
          </div>
          <div className="flex justify-end">
            <button class="btn btn-active btn-link">
              More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
