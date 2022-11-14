import Mock from "mockjs";
// Webpack默认暴露json格式文件
import floor from './floor.json';
import banner from './banner.json';

// 请求地址，请求参数
Mock.mock('/mock/floor', { code: 200, data: floor });
Mock.mock('/mock/banner', { code: 200, data: banner });