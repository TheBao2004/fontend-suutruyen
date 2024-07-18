import { OBJECT_ACTION } from "./const";


const actionDetailComic = (payload) => {
    return {
        type: OBJECT_ACTION.DETAIL_COMIC,
        payload: payload
    };
}


const actionCategoryComic = (payload) => {
    return {
        type: OBJECT_ACTION.CATEGORY_COMIC,
        payload: payload
    };
}


const actionItemChapComic = (payload) => {
    return {
        type: OBJECT_ACTION.ITEM_CHAP_COMIC,
        payload: payload
    };
}

const actionFullComic = (payload) => {
    return {
        type: OBJECT_ACTION.FULL_COMIC,
        payload: payload
    };
}

const actionNewComic = (payload) => {
    return {
        type: OBJECT_ACTION.NEW_COMIC,
        payload: payload
    };
}

const actionLastChapComic = (payload) => {
    return {
        type: OBJECT_ACTION.LAST_CHAP_COMIC,
        payload: payload
    };
}


const actionCategories = (payload) => {
    return {
        type: OBJECT_ACTION.CATEGORIES,
        payload: payload
    };
}

const actionTableComic = (payload) => {
    return {
        type: OBJECT_ACTION.TABLE_COMIC,
        payload: payload
    };
}


export {
    actionDetailComic,
    actionTableComic,
    actionCategories,
    actionLastChapComic,
    actionNewComic,
    actionFullComic,
    actionItemChapComic,
    actionCategoryComic,
}
