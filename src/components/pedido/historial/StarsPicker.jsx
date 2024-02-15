import { useEffect, useState } from "react";

export default function StarsPicker({ onChange, stars, enabled = true }) {
  const [rating, setRating] = useState(stars);
  const [hover, setHover] = useState(null);
  const [totalStars] = useState(5);

  useEffect(() => {
    onChange(rating);
  }, [rating, onChange]);

  return (
    <>
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1;
        const color =
          currentRating <= (hover || rating) ? "yellow-500" : "slate-300";

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={currentRating}
              onChange={enabled ? () => setRating(currentRating) : () => {}}
            />
            <span
              className={`${
                enabled ? "cursor-pointer" : ""
              } text-[3rem] leading-none transition-colors text-${color}`}
              onMouseEnter={enabled ? () => setHover(currentRating) : () => {}}
              onMouseLeave={enabled ? () => setHover(null) : () => {}}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </>
  );
}
