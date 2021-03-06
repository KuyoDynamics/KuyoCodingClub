interface IProps {
  animations?: string;
}
export default function JoinClubButton({ animations }: IProps) {
  return (
    <button
      className={`${animations} hover:animate-none mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
    >
      Join our club now!
    </button>
  );
}
