import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) {
    return <div />
  }

  return (
    <div className="bg-black min-h-screen grid place-items-center">
    <div class="rounded-lg border-black overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
    <div class="w-full flex justify-between p-3">
      <div class="flex">
        <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden ">
          <img src="https://influencers.plus/account_data/instagram_profile_pictures/528817151.jpg" alt="profilepic" />
        </div>
        <span class="pt-1 ml-2 font-bold text-sm">nasa</span>
      </div>
      
      <span class="px-2 hover:bg-gray-300 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>
    {photoData.media_type === "image" ? (
        <img src={photoData.url} alt={photoData.title} />
      ) : (
        <iframe src={photoData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen />
      )}
    <div class="px-3 pb-2">
      
      <div class="pt-3">
        <div class="mb-2 text-sm">
          <span class="font-medium mr-2">nasa</span>{photoData.explanation}
        </div>
      </div>
      <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all comments</div>
      <div class="mb-2">
        <div class="mb-2 text-sm">
          <span class="font-medium mr-2">astronomy_enthusiast</span>This is so cool!
        </div>
      </div>
      <div class=" text-sm my-2">
        {photoData.date}
      </div>
    </div>
  </div>
  </div>
  
  );
}