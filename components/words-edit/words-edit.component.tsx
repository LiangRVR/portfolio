import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/solid";

type InputWord = {
  word: string;
};

const WordsEdit = () => {
  const [words, setWords] = useState<string[]>(["go"]);
  const [show, setShow] = useState(false);

  const {
    register: wordRegister,
    handleSubmit: wordHandleSubmit,
    reset: resetWordForm,
  } = useForm<InputWord>({
    defaultValues: {
      word: "",
    },
  });

  const onSubmitWord: SubmitHandler<InputWord> = (formData) => {
    if (!words.includes(formData.word)) {
      if (show) setShow(false);
      setWords(words.concat(formData.word));
      resetWordForm();
      return;
    }
    setShow(true);
  };

  const handleClick = (wordToDelete: string) => {
    return () => {
      const newWordsArray = words.filter((word) => word !== wordToDelete);
      setWords(newWordsArray);
    };
  };

  return (
    <div className="w-fit p-10 mx-auto flex flex-col  content-center justify-center space-y-5 border-2 shadow-md rounded-xl">
      <h2 className="text-2xl mb-2 text-center">Phrases added</h2>
      <div>
        {words.map((word: string) => (
          <div key={word} className="flex flex-row space-x-4 mb-2">
            <div className="border rounded-lg shadow-sm w-64 h-12 flex flex-col justify-center">
              <p className="text-center text-lg">{word}</p>
            </div>
            <div className="flex flex-col justify-center">
              <XMarkIcon
                className="h-8 text-blue-600 hover:text-red-600 transition-all cursor-pointer"
                onClick={handleClick(word)}
              />
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={wordHandleSubmit(onSubmitWord)}
        className="flex max-w-sm space-x-5"
      >
        <input
          {...wordRegister("word")}
          className="outline-none bg-slate-300/10 w-full rounded-sm border-b px-3 py-1 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40"
          placeholder="Phrase"
          type="text"
        />
        <button className="bg-[#6daffd] border-2 border-[#6daffd] px-3 py-1 rounded-md text-black font-bold md:text-lg hover:bg-[#3992ff] hover:border-[#3992ff] active:bg-slate-100">
          Add
        </button>
      </form>
      {show && <p className="text-center text-red-600">Word already added!!</p>}
    </div>
  );
};

export default WordsEdit;
