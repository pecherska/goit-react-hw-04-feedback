import PropTypes from 'prop-types';
import { ListFeedbackOption, ButtonFeedback } from './FeedbackOption.styled.js';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ListFeedbackOption>
        {options.map(option => {
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

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
