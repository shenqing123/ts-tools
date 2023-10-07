import request from "@/utils/mapRequest";

export const getList = () => request.get("/music/playlist");
