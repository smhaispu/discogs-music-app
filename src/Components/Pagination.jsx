import React, { useContext } from 'react'
import {
    StyledPagination,
    DataContainer,
    Button
} from './Pagination.style'
import { Context } from "..";

function Pagination({ data, RenderComponent, title, setCurrentPage, handlePaginationChange }) {
    const { state } = useContext(Context);
    function goToFirstPage() {
        setCurrentPage((page) => page - 1);
        handlePaginationChange('first');
    }
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
        handlePaginationChange('next');
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
        handlePaginationChange('prev');
    }
    function goToLastPage() {
        setCurrentPage((page) => page + 1);
        handlePaginationChange('last');
    }

    return (
        <div>

            {/* show the posts, 10 posts at a time */}
            <DataContainer className="dataContainer">
                {
                    data.map(release => {
                        return <RenderComponent key={release.id} data={release} />
                    })}

            </DataContainer>

            <StyledPagination className="pagination">
                {/* previous button */}
                <Button
                    onClick={goToFirstPage}
                    className={`first ${state?.pagination?.urls?.first ? '' : 'disabled'}`}>
                    first
                 </Button>

                <Button
                    onClick={goToPreviousPage}
                    className={`prev ${state?.pagination?.urls?.prev ? '' : 'disabled'}`}>
                    prev
                 </Button>
                {state?.pagination.page + '/' + state?.pagination.pages}
                <Button
                    onClick={goToNextPage}
                    className={`next ${state?.pagination?.urls?.next ? '' : 'disabled'}`}>
                    next
                </Button>
                <Button
                    onClick={goToLastPage}
                    className={`last ${state?.pagination?.urls?.last ? '' : 'disabled'}`}>
                    last
                 </Button>
            </StyledPagination>
        </div>
    );
}

export default React.memo(Pagination);