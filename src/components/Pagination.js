import React from "react";

import { ThemeContext } from "../theme-context.js";

class Pagination extends React.Component {

    render() {
        const { page, totalPages, pageHandler } = this.props;

        return (
            <ThemeContext.Consumer>
                {
                    ({ theme }) => (
                        <>
                            <p className="current-page">Current Page: {page}</p>
                            <div className="pagination-buttons">
                                <button
                                    className={`pagination-button ${theme.PaginationButtonClass}`}
                                    disabled={page <= 1}
                                    onClick={() => pageHandler(-1)}
                                >
                                    Previous page
                                </button>
                                <button
                                    className={`pagination-button ${theme.PaginationButtonClass}`}
                                    disabled={page >= totalPages}
                                    onClick={() => pageHandler(1)}
                                >
                                    Next page
                                </button>
                            </div>
                        </>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}

export default Pagination;