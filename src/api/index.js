import requests from "./request";

// 三级联动
export const reqCatagoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}
