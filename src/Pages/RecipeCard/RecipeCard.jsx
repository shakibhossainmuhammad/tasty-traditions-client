import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function RecipeCard({ recipe }) {
  const [fold, setFold] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, image, ingredients, cookingMethod, rating } = recipe;

  const notify = () => toast('Added to favorite');
  const handleClick = () => {
    setIsFavorite(!isFavorite);
    setDisabled(true);
    notify();
  };

  return (
    <div className="">
      {/* <div className="flex  items-center container mx-auto dark:bg-gray-900 py-2 px-6  justify-center ">
        <div className="h-full w-96 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <div>
              <img src={image} alt="" />
            </div>
            <h4 className="text-gray-800 text-3xl mt-3 dark:text-gray-100 font-bold mb-3">
              {name}
            </h4>
            <p className="text-gray-800 dark:text-gray-100 text-sm">
              <p className="text-xl font-serif ">Ingredient:</p>
              <ul className="text-[18px] font-medium mt-2 list-disc pl-5">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </p>
            <div className="w-full px-4 mt-2">
              <p className="text-xl font-serif mb-1 ">Cooking Method:</p>
              {fold ? (
                <>
                  <span className=" text-gray-600">
                    {cookingMethod.substring(0, 100)}.....
                  </span>
                  <span
                    className="cursor-pointer text-blue-600 "
                    onClick={() => setFold(!fold)}
                  >
                    Read More
                  </span>
                </>
              ) : (
                <>
                  <span className=" text-gray-900">{cookingMethod}.....</span>
                  <span
                    className="cursor-pointer text-blue-600 "
                    onClick={() => setFold(!fold)}
                  >
                    Read Less
                  </span>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="flex mt-5 items-center justify-between text-gray-800">
              <div className="flex gap-2 items-center">
                <Rating style={{ maxWidth: 130 }} value={4.5} readOnly />{' '}
                {rating}
              </div>

              <div>
                <button
                  className="bg-gray-500 py-2 px-3 rounded-lg text-white"
                  disabled={disabled}
                  onClick={handleClick}
                >
                  {isFavorite ? (
                    <FaHeart className="text-red-500 w-6 h-6" />
                  ) : (
                    <FaRegHeart className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Link
        href="#"
        class="group relative block bg-black h-[25rem] lg:h-[28rem] "
      >
        <img
          alt="Developer"
          src={image}
          class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div class="relative p-4 sm:p-6 lg:p-8">
          <p class="text-xl font-bold text-white sm:text-2xl">{name}</p>

          <div class="mt-20 sm:mt-14 lg:mt-24">
            <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-white dark:text-gray-100 text-sm mb-3">
                <p className="text-xl font-serif ">Ingredient:</p>
                <ul className="text-[18px] font-medium mt-2 list-disc pl-5">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </p>
              <p class="text-sm text-white">{cookingMethod}</p>

              <div className="flex mt-5 items-center justify-between text-gray-800">
                <div className="flex gap-2 items-center">
                  <Rating style={{ maxWidth: 130 }} value={4.5} readOnly />{' '}
                  <span className="text-white"> {rating}</span>
                </div>

                <div>
                  <button
                    className="bg-gray-500 py-2 px-3 rounded-lg text-white"
                    disabled={disabled}
                    onClick={handleClick}
                  >
                    {isFavorite ? (
                      <FaHeart className="text-red-500 w-6 h-6" />
                    ) : (
                      <FaRegHeart className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
