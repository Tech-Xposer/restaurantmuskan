"use client";
import React, { useEffect } from "react";
import "./gallery.css";
import Image from "next/image";

const GalleryPage = () => {
  useEffect(() => {
    const starContainer = document.querySelector(".sparkling-stars");
    const numStars = 100; // Adjust number of stars

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starContainer.appendChild(star);
    }

    // Handling gallery item clicks
    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", (event) => {
        const modal = document.getElementById("image-modal");
        const modalImg = document.getElementById("modal-img");
        modal.style.display = "flex"; // Show the modal
        modalImg.src = event.target.src; // Set modal image to clicked image
      });
    });

    // Close the modal on clicking the close button
    document.getElementById("modal-close").addEventListener("click", () => {
      document.getElementById("image-modal").style.display = "none"; // Hide the modal
    });
  }, []);
  return (
    <>
      <div className="sparkling-stars" /> {/* Moving sparkles background */}
      <header>
        <h1 className="text-5xl font-londrina">Galerie Muskan</h1>
      </header>
      <div className="gallery-container">
        <div className="gallery">
          {Array.from({ length: 33 }, (_, index) => {
            const src = `/images/image (${index + 1}).jpg`;
            return src ? (
              <img
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-item object-cover"
                width={100}
                height={100}
              />
            ) : null;
          })}
          {/* Add more images as needed */}
        </div>
      </div>
      <div id="image-modal" className="modal">
        <span id="modal-close" className="modal-close">
          ×
        </span>
        <Image id="modal-img" src="" alt="" />
      </div>
    </>
  );
};

export default GalleryPage;
