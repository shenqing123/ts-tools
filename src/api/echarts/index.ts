import request from "@/utils/chartRequest";

export const getReportData = () => request.get("/api/reportdata");
export const getSalesData = () => request.get("/api/saledata");
export const getKeywordData = () => request.get("/api/keyworddata");
export const getCategoryData = () => request.get("/api/categorydata");
export const getMapData = () => request.get("/api/mapdata");
