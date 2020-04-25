import store from "@/store";

export const getGlobalData = function() {
    return Promise.all([
        store.dispatch("blog/getTags")
    ]);
};