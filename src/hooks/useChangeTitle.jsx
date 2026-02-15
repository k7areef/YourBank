import React from 'react';
function useChangeTitle(title = "YourBank - Home") {
    React.useEffect(() => {
        window.document.title = "YourBank - " + title;
    }, [title]);
    return null;
};
export default useChangeTitle;