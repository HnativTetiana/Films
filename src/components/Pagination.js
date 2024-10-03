import React, { useContext } from "react";

import { ThemeContext } from "../theme-context.js";

const Pagination = (props) => {

    const { currentPage, totalPages, pageHandler } = props;

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <p className="current-page">Current Page: {currentPage}</p>
            <div className="pagination-buttons">
                <button
                    className={`pagination-button ${theme.PaginationButtonClass}`}
                    disabled={currentPage <= 1}
                    onClick={() => pageHandler(-1)}
                >
                    Previous page
                </button>

                <button
                    className={`pagination-button ${theme.PaginationButtonClass}`}
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