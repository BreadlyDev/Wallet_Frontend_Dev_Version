import { useState } from 'react';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <div>{count}</div>
            <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
                +
            </button>
            <button type="button" onClick={() => setCount((prevState) => prevState - 1)}>
                --
            </button>
        </div>
    );
};
