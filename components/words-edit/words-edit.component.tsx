import React, { useState } from "react";
import ListEdit from "../list-edit/list-edit.component";

const WordsEdit = () => {
  const [words, setWords] = useState<string[]>([]);

  return (
    <ListEdit
      inputStrings={words}
      setNewString={setWords}
      placeholder={"Phrase"}
      title={"Phrases added"}
      errorMessage={"Phrase already added!!"}
    />
  );
};

export default WordsEdit;
