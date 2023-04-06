import { Heart } from "./components/Icons";

export default async function Page() {
  return (
    <div className="w-full h-full text-gray-800 flex items-center dark:text-gray-100">
      <h1 className="text-xl md:text-4xl font-semibold text-center mt-6 sm:mt-16 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
        Document + ChatGPT = <Heart className="w-9 h-9 text-red-800" />
      </h1>
    </div>
  );
}
