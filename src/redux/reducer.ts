import { OBJECT_ACTION } from "./const";
import initState from "./init";

function reducer(state = initState, action){

    switch (action.type) {
        case OBJECT_ACTION.DETAIL_COMIC:
            return {
                ...state,
                detailComic: action.payload
            };
            break;
        case OBJECT_ACTION.ITEM_CHAP_COMIC:
            return {
                ...state,
                itemChapComic: action.payload
            };
            break;
        case OBJECT_ACTION.FULL_COMIC:

            return {
                ...state,
                fullComic: action.payload
            };
            break;
        case OBJECT_ACTION.LAST_CHAP_COMIC:

        return {
            ...state,
            lastChapComic: action.payload
        };
        break;
        case OBJECT_ACTION.CATEGORIES:

        return {
            ...state,
            listCategory: action.payload
        };

        case OBJECT_ACTION.TABLE_COMIC:

        return {
            ...state,
            tableComic: action.payload
        };

        break;
        case OBJECT_ACTION.CATEGORY_COMIC:
            const result = {
                ...state,
                categoryComic: action.payload
            };
            
            return result; 
            break;
        default:
            return state;
            break;
    }

}

export default reducer;