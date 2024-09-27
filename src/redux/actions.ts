import types from "./types";

const changeLanguage = (language: Number) => {
    return {
        type: types.changeLanguage,
        payload: language,
    };
};
export { changeLanguage };
