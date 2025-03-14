import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-items-center md:p-8 lg:pb-20 font-[family-name:var(--font-outfit-sans)] bg-orange-100 text-gray-900">
      <div className=" bg-white md:p-5 rounded-xl w-full lg:w-2xl">
        <div className="">
          <Image
            className="  md:rounded-lg"
            src="/images/image-omelette.jpeg"
            alt={"Simple Omelette "}
            width={1920}
            height={1080}
          ></Image>
        </div>
        <div className=" px-3 md:px-0">
          <h1 className=" text-3xl py-5 font-[family-name:var(--font-young-serif)]">
            Simple Omelette Recipe
          </h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className=" bg-pink-100 p-5 my-5 rounded-sm">
            <h3 className=" text-pink-900 font-bold">Preparation time</h3>
            <ul className=" list-disc list-inside list marker:text-pink-900">
              <li>
                <b className=" text-gray-700 font-bold">Total: </b>
                Approximately 10 minutes
              </li>
              <li>
                <b className=" text-gray-700 font-bold">Preparation: </b>5
                minutes
              </li>
              <li>
                <b className=" text-gray-700 font-bold">Cooking: </b>5 minutes
              </li>
            </ul>
          </div>
          <h2 className="font-[family-name:var(--font-young-serif)] text-2xl text-amber-900">
            Ingredients
          </h2>
          <ul className=" list-disc list-inside marker:text-amber-900 marker:text-sm">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <div className="flex w-full items-center rounded-full my-3">
            <div className="flex-1 border-b border-gray-200"></div>
          </div>
          <h2 className="font-[family-name:var(--font-young-serif)] text-2xl text-amber-900">
            Instructions
          </h2>
          <ol className="list-decimal list-outside pl-6 marker:text-amber-900 marker:font-bold">
            <li className="pl-3">
              <b className="text-gray-700 font-bold">Beat the eggs: </b>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </li>
            <li className="pl-3">
              <b className="text-gray-700 font-bold">Heat the pan: </b>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li className="pl-3">
              <b className="text-gray-700 font-bold">Cook the omelette: </b>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li className="pl-3">
              <b className="text-gray-700 font-bold">
                Add fillings (optional):{" "}
              </b>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li className="pl-3">
              <b className="text-gray-700 font-bold">Fold and serve: </b>
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </li>
            <li className="pl-3">
              <b className="text-gray-700 font-bold">Enjoy: </b>
              Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
          <div className="flex w-full items-center rounded-full my-3">
            <div className="flex-1 border-b border-gray-200"></div>
          </div>
          <h2 className="font-[family-name:var(--font-young-serif)] text-2xl text-amber-900">
            Nutrition
          </h2>
          The table below shows nutritional values per serving without the
          additional fillings.
          <table className=" table-auto w-full">
            <tr className=" border-b border-gray-200 h-10">
              <td className=" ">Calories</td>
              <td className="text-amber-900 font-bold">277kcal</td>
            </tr>
            <tr className=" border-b border-gray-200 h-10">
              <td>Carbs</td>
              <td className="text-amber-900 font-bold">0g</td>
            </tr>
            <tr className=" border-b border-gray-200 h-10">
              <td>Protein</td>
              <td className="text-amber-900 font-bold">0g</td>
            </tr>
            <tr className=" h-10">
              <td>Fat</td>
              <td className="text-amber-900 font-bold">22g</td>
            </tr>
          </table>
        </div>
        <div className=" pt-10">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/Unfiltered-On-GH">Tafadzwa Mabika</a>.
        </div>
      </div>
    </div>
  );
}
