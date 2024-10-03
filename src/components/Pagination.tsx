import React from "react";
import { useSelector } from "react-redux";
import { filmSelector } from "../store/selectors.ts"
import { themeSelector } from "../store/selectors.ts";

const Pagination: React.FC<{ currentPage: number, pageHandler: (value: number) => void }> = (props) => {

    const { totalPages } = useSelector(filmSelector);

    const { currentPage, pageHandler } = props;

    const theme = useSelector(themeSelector);

    return (
        <>
            <p className="current-page">Current Page: {currentPage}</p>
            <div className="pagination-buttons">
                <button
                    className={`${theme.PaginationButtonClass}`}
                    disabled={currentPage <= 1}
                    onClick={() => pageHandler(-1)}
                >
                    Previous page
                </button>

                <button
                    className={`${theme.PaginationButtonClass}`}
                    disabled={currentPage >= totalPages}
                    onClick={() => pageHandler(1)}
                >
                    Next page
                </button>
            </div>
        </>
    )
}

export default Pagination;