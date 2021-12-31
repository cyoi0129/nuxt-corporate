import { fetchDBData } from './firebase';
import { masterItem, postItem, postData, StoreData } from './types';

const convertPosts = (posts: any) => {
    let result = [];
    for (const [key, PostData] of Object.entries(posts)) {
        let tempPostData = PostData;
        const tempPostID = { id: key }
        const tempPostItem = Object.assign(tempPostID, tempPostData);
        result.push(tempPostItem);
    }
    return result;
}

const findMasterNameByID = (id: number, list: masterItem[]) => {
    return list.find(item => item.id === id)?.name;
}

export const state = () => ({
    posts: [],
    masters: {
        tags: [],
        categories: []
    }
})

export const mutations = {
    mutateData(state: any, payload: any) {
        state.posts = convertPosts(payload.posts);
        state.masters = payload.masters;
    },
}

export const actions = {
    async fetchData(store: any) {
        const response = await fetchDBData();
        store.commit('mutateData', response);
    }
}

export const getters = {
    posts: (state: any) => state.posts,
    getPost(state: any) {
        return (id: string) => {
            const target = state.posts.find((post: any) => post.id === id);
            const categoryStr = findMasterNameByID(target.category, state.masters.categories);
            const tagStrList = target.tag.map((item: any) => findMasterNameByID(item, state.masters.tags));
            const result = {
                id: target.id,
                title: target.title,
                description: target.description,
                thumbnail: target.thumbnail,
                date: target.date,
                category: categoryStr,
                tag: tagStrList,
                content: target.content
            };
            return result;
        }
    }
}
