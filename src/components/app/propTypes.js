import PropTypes from "prop-types";
import {artistQuestionPropTypes} from "../artist-question-screen/propTypes";
import {genreQuestionPropTypes} from "../genre-question-screen/propTypes";

export const appPropTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistQuestionPropTypes.question, genreQuestionPropTypes.question]).isRequired
  )
};
