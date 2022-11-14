import requests from "./request";

// 三级联动
export const reqCatagoryList = () => requests.get('/product/getBaseCategoryList');
