import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import { FaThumbsUp } from 'react-icons/fa';
// import LazyLoad from 'react-lazy-load';

export default function ChefDetails() {
  const chefdetails = useLoaderData();
  const {
    picture,
    name,
    place,
    bio,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    recipes,
  } = chefdetails;

  return (
    <div>
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="px-7 py-6 bg-gradient-to-r from-yellow-100 via-orange-200 to-green-100 rounded">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 pt-6 mb-10 md:mb-0">
                <h3 className="mb-1 text-2xl font-extralight font-serif text-gray-800">
                  <span>{name}</span>
                </h3>
                <p className="mb-2 md:mb-2 text-lg  font-mono text-gray-800">
                  {place}
                </p>
                <p className="mb-2 md:mb-2  font-medium text-gray-800">{bio}</p>
                <div className="w-full text-center mt-2 mb-8 md:mb-16">
                  <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div className="p-3 text-center">
                      <span className="text-2xl font-bold block uppercase tracking-wide text-slate-700">
                        {yearsOfExperience}
                      </span>
                      <span className="text-xl font-serif text-slate-400">
                        Year Exerience
                      </span>
                    </div>
                    <div className="p-3 text-center">
                      <span className="text-2xl font-bold block uppercase tracking-wide text-slate-700">
                        {numberOfRecipes}
                      </span>
                      <span className="text-xl font-serif text-slate-400">
                        Recipes
                      </span>
                    </div>

                    <div className="p-3 text-center">
                      <span className="text-2xl font-bold block uppercase tracking-wide text-slate-700">
                        {likes}K
                      </span>
                      <span className="text-xl font-serif text-slate-400">
                        <FaThumbsUp className="w-10 h-6" />
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  className="flex items-center text-gray-800 font-medium"
                  to="#"
                >
                  <svg
                    className="mr-1 text-gray-800"
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.92 6.62C11.8724 6.49725 11.801 6.38511 11.71 6.29L6.71 1.29C6.61676 1.19676 6.50607 1.1228 6.38425 1.07234C6.26243 1.02188 6.13186 0.995911 6 0.995911C5.7337 0.995911 5.4783 1.1017 5.29 1.29C5.19676 1.38324 5.1228 1.49393 5.07234 1.61575C5.02188 1.73758 4.99591 1.86814 4.99591 2C4.99591 2.2663 5.1017 2.5217 5.29 2.71L8.59 6H1C0.734784 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89465 0.734784 8 1 8H8.59L5.29 11.29C5.19627 11.383 5.12188 11.4936 5.07111 11.6154C5.02034 11.7373 4.9942 11.868 4.9942 12C4.9942 12.132 5.02034 12.2627 5.07111 12.3846C5.12188 12.5064 5.19627 12.617 5.29 12.71C5.38296 12.8037 5.49356 12.8781 5.61542 12.9289C5.73728 12.9797 5.86799 13.0058 6 13.0058C6.13201 13.0058 6.26272 12.9797 6.38458 12.9289C6.50644 12.8781 6.61704 12.8037 6.71 12.71L11.71 7.71C11.801 7.6149 11.8724 7.50275 11.92 7.38C12.02 7.13654 12.02 6.86346 11.92 6.62Z"
                      fill="#D7D5F8"
                    ></path>
                  </svg>
                  <Link to="/">Back Home</Link>
                </Link>
              </div>
              <div className="w-full md:w-1/2 flex items-center">
                <img className="mx-auto h-48 rounded-lg" src={picture} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="text-center text-3xl font-serif">Recipes</h1>
        <div className="grid md:grid-cols-2  lg:grid-cols-2  xl:grid-cols-3 md:px-20 lg:px-48 mt-10 gap-x-5 gap-y-14">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
