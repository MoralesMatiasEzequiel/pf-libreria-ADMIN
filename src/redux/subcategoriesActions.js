import axios from "axios";
import { getAllSubcategories } from "./subcategoriesSlice";

export const getSubcategories = () => {

    return async (dispatch) => {
        const { data } = await axios.get("/subcategory");
        dispatch(getAllSubcategories(data));
    }
}