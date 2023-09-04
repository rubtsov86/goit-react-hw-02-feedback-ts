interface IFeedback {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Feedback: React.FC<IFeedback> = ({ onClick }) => {
  return (
    <>
      <h2>Please leave feedback</h2>

      <button id="good" type="button" onClick={onClick}>
        Good
      </button>
      <button id="neutral" type="button" onClick={onClick}>
        Neutral
      </button>
      <button id="bad" type="button" onClick={onClick}>
        Bad
      </button>
    </>
  );
};
