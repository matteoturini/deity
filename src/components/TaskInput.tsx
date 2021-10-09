import { useState } from "react";

interface ITaskInputProps {
    onTaskCreate(task: string): void;
}

export default function TaskInput(props: ITaskInputProps) {
    const [value, setValue] = useState<string>("");

    const submit = () => {
        props.onTaskCreate(value);
        setValue("");
    };

    return (
        <div className="flex items-center m-4 fixed shadow-lg bottom-4 text-black placeholder-gray-500 dark:text-white" style={{ width: 'calc(100vw - 2rem)' }}>
            <input onKeyDown={e => e.key === 'Enter' && submit()} onInput={e => setValue(e.currentTarget.value)} value={value} placeholder="What would you like to do today?" type="text" className="transition-colors p-4 rounded-bl-md rounded-tl-md h-20 flex-grow outline-none hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800 bg-gray-200" />
            <button onClick={submit} className="transition-colors font-mono text-2xl rounded-br-md rounded-tr-md h-20 w-20 hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800 bg-gray-200">+</button>
        </div>
    );
}