import React, { ReactElement, ReactNode, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Input = {
  inputString: string;
};

export type ElementToShowProps = {
  key: string;
  propValue?: string;
};

type ListEditProps = {
  inputStrings: string[];
  setNewString: React.Dispatch<React.SetStateAction<string[]>>;
  title: string;
  placeholder: string;
  errorMessage: string;
  elementToShow?: ({ key, propValue }: ElementToShowProps) => JSX.Element;
};

const ListEdit = ({
  inputStrings,
  setNewString,
  placeholder,
  title,
  errorMessage,
  elementToShow,
}: ListEditProps) => {
  const [show, setShow] = useState(false);

  const { register, handleSubmit, reset } = useForm<Input>({
    defaultValues: {
      inputString: "",
    },
  });

  const onSubmitWord: SubmitHandler<Input> = (formData) => {
    if (!inputStrings.includes(formData.inputString)) {
      if (show) setShow(false);
      setNewString(inputStrings.concat(formData.inputString));
      reset();
      return;
    }
    setShow(true);
  };

  const handleClick = (stringInListToDelete: string) => {
    return () => {
      const newStringsArray = inputStrings.filter(
        (stringInList) => stringInList !== stringInListToDelete
      );
      setNewString(newStringsArray);
    };
  };

  return (
    <div className="w-11/12 md:w-fit p-10 mx-auto flex flex-col  content-center justify-center space-y-5 border-2 shadow-md rounded-xl">
      <h2 className="text-2xl mb-2 text-center">{title}</h2>

      {inputStrings.map((stringInList: string) => (
        <div
          key={stringInList}
          className="flex flex-row space-x-4 mb-2 justify-center"
        >
          {elementToShow ? (
            elementToShow({ key: stringInList, propValue: stringInList })
          ) : (
            <div className="border rounded-lg shadow-sm w-[60vw] overflow-hidden scrollbar scrollbar-hide md:w-fit h-12 px-3 flex flex-col justify-center ">
              <p className="text-center md:text-lg">{stringInList}</p>
            </div>
          )}
          <div className="flex flex-col justify-center">
            <XMarkIcon
              className="h-8 text-blue-600 hover:text-red-600 transition-all cursor-pointer"
              onClick={handleClick(stringInList)}
            />
          </div>
        </div>
      ))}

      <form
        onSubmit={handleSubmit(onSubmitWord)}
        className="flex max-w-sm space-x-5 mx-auto"
      >
        <input
          {...register("inputString")}
          className="outline-none bg-slate-300/10 w-full rounded-sm border-b px-3 py-1 border-[#242424] text-gray-600 placeholder-gray-500 transition-all focus:border-[#6daffd]/40 focus:text-[#6daffd] hover:border-[#6daffd]/40"
          placeholder={placeholder}
          type="text"
        />
        <button className="bg-[#6daffd] border-2 border-[#6daffd] px-3 py-1 rounded-md text-black font-bold md:text-lg hover:bg-[#3992ff] hover:border-[#3992ff] active:bg-slate-100">
          Add
        </button>
      </form>
      {show && <p className="text-center text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default ListEdit;
