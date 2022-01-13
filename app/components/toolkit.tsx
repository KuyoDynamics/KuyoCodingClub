export default function Toolkit({
  showImageToLeft,
  title,
  description,
  details,
  rating,
  subscriber_count,
  review_count,
  image,
  reviews,
}) {
  return (
    <>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-6">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            {title}
          </h3>
          <p className="text-gray-600 mb-8">
            {description}
            <br />
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-6">
          <img className="w-full md:w-4/5 z-50" src={image} />
        </div>
      </div>
    </>
  );
}
