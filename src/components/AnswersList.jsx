/* eslint-disable react/prop-types */

import AnswersItem from "./AnswersItem";

export default function AnswersList({answersList}) {
  console.log("Inside AnswersList: ", answersList);
  // const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
