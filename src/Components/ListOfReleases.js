import React, { useState, useEffect, useContext, useCallback } from "react";
import fetchAPI from '../Utils/fetchCalls';
import { TOKEN, URLObject } from '../Utils/Constants'
import Post from "./ReleaseItem";
import Pagination from './Pagination'
import { Context } from "..";
import { debounce } from '../Utils/helperFunctions'
import SearchBox from "./SearchBox";

const ItemDetails = React.lazy(() => import('./ItemDetailsPopup'));

const ListOfReleases = () => {

    const [value, setValue] = useState('');
    const [pages, setPages] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const { state, dispatch } = useContext(Context);
    const dataLimit = 25;


    const getCachedResponse = useCallback(async (url) => {
        if ('caches' in window) {
            const response = await caches.match(url.includes('token') ? url : url + '&token=' + TOKEN);
            if (response) {
                const results = await response.json();
                const paginationResponse = results.pagination;
                const releases = results.releases ? results.releases : results.results;
                dispatch({
                    ...state,
                    pagination: { ...paginationResponse },
                    releases: [...releases],
                    isLoading: false
                });
            }
        }
    }, [state, dispatch])

    const getData = useCallback(async (inputParam) => {
        let dataResponse;
        let url = inputParam ? URLObject.getSeachData + inputParam : URLObject.getMusicData;
        dispatch({ ...state, isLoading: true });
        if (!inputParam) {
            url = url + `?page=${currentPage}&per_page=${dataLimit}`
        }
        getCachedResponse(url);
        try {

            dataResponse = await fetchAPI('GET', url);
            const paginationResponse = dataResponse.pagination;
            const releases = dataResponse.releases ? dataResponse.releases : dataResponse.results;
            setPages(Math.round(dataResponse.length / dataLimit));
            dispatch({
                ...state, pagination: { ...paginationResponse }, releases: [...releases],
                isLoading: false
            });

        } catch (e) {
            dispatch({
                ...state,
                isLoading: false
            });

            console.log('You are offline the data shown is from cached data!')
        } finally {
            dataResponse = null;
        }
    }, [currentPage, dispatch, getCachedResponse, state])

    const debouncedGetData = useCallback(debounce(getData, 1000), [getData]);

    const handleChangeValue = (e) => {
        setValue(e.target.value);
        debouncedGetData(e.target.value);
    }

    const handlePaginationChange = async (type) => {
        const url = state.pagination.urls[type];
        dispatch({ ...state, isLoading: true });
        let dataResponse;
        getCachedResponse(url);
        try {
            dataResponse = await fetchAPI('GET', url);
            setPages(Math.round(dataResponse.length / dataLimit));
            dispatch({
                ...dataResponse,
                isLoading: false
            })
        } catch (e) {
            dispatch({
                ...state,
                isLoading: false
            })
            console.log('You are offline the data shown is from cached data!')
        } finally {
            dataResponse = null;
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (<>
        <SearchBox value={value} handleChange={handleChangeValue} />
        {state?.popUpDetails?.isOpen && <ItemDetails />}
        {state?.releases?.length > 0 &&
            <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                data={state.releases}
                RenderComponent={Post}
                title="Posts"
                pageLimit={5}
                dataLimit={dataLimit}
                handlePaginationChange={handlePaginationChange}
            />
        }
    </>)
}

export default React.memo(ListOfReleases);