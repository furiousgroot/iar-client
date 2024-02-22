import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Institute of Advanced Research`;
    }, [title])
}

export default useTitle;