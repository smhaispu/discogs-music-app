import { useState, useEffect, useContext } from "react";
import fetchAPI from '../Utils/fetchCalls';
import { URLObject } from '../Utils/Constants'
import Post from "./ReleaseItem";
import Pagination from './Pagination'
import { Context } from "..";

const ListOfReleases = () => {

    const [value, setValue] = useState('');
    const [pages, setPages] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const { state, dispatch } = useContext(Context);
    const dataLimit = 25;
    console.log('state', state);
    const getData = async (inputParam) => {
        let dataResponse;
        let url = inputParam ? URLObject.getSeachData + inputParam : URLObject.getMusicData;
        if (!inputParam) {
            url = url + `?page=${currentPage}&per_page=${dataLimit}`
        }
        if ('caches' in window) {
            const response = await caches.match(url);
            if (response && !dataResponse) {
                const results = await response.json();
                dispatch({ ...state, ...results });
            }
        }
        try {

            dataResponse = await fetchAPI('GET', url);
            setPages(Math.round(dataResponse.length / dataLimit));
            dispatch({ ...state, ...dataResponse });
            // setReleaseList(dataResponse);
        } catch (e) {
            alert('You are offline the data shown is from cached data!')
        } finally {
            dataResponse = null;
        }
    }


    const handleChangeValue = (e) => {
        setValue(e.target.value);
        getData(e.target.value);
    }

    const handlePaginationChange = async (type) => {
        const url = state.pagination.urls[type];
        let dataResponse;
        if ('caches' in window) {
            const response = await caches.match(url);
            if (response && !dataResponse) {
                const results = await response.json();
                // setReleaseList(results);
                dispatch({
                    ...results
                })
            }
        }
        try {
            dataResponse = await fetchAPI('GET', url);
            setPages(Math.round(dataResponse.length / dataLimit));
            // setReleaseList(dataResponse);
            dispatch({
                ...dataResponse
            })
        } catch (e) {
            alert('You are offline the data shown is from cached data!')
        } finally {
            dataResponse = null;
        }
    }




    useEffect(() => {
        getData();
    }, [])


    return (<>
        <input value={value} onChange={handleChangeValue} />
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

export default ListOfReleases;