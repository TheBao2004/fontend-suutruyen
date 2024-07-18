import { getListCategory, getLastChapComic, getFullComic, getNewComic } from "../apis/functions";


const initState = {
    listCategory: {},
    tableComic: {},
    lastChapComic: {},
    fullComic: {},
    newComic: {},
    detailComic: {},
    categoryComic: {},
    itemChapComic: {},
};


const createState = async () => {

    // initState.listCategory = await getListCategory();
    // initState.lastChapComic = await getLastChapComic();
    // initState.fullComic = await getFullComic();
    // initState.newComic = await getNewComic();

}

createState();

export default initState;