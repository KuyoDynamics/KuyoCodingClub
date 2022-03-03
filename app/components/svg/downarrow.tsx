type PropType = {
  classNames: string;
};

export default function DownArrow(props: PropType) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={props.classNames}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
    </>
  );
}
