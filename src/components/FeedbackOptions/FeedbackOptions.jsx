import { ListFeedbackOption, ButtonFeedback } from './FeedbackOption.styled.js';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ListFeedbackOption>
        {Object.keys(options).map(option => {
          return (
            <li key={option}>
              <ButtonFeedback onClick={() => onLeaveFeedback(option)}>
                {option}
              </ButtonFeedback>
            </li>
          );
        })}
      </ListFeedbackOption>
    </>
  );
};

export default FeedbackOptions;
