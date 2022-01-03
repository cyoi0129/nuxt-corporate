import { fetchDBData } from './firebase';
import { masterItem, postItem, postData, StoreData, postPageData } from './types';

const convertPosts = (posts: any) => {
    let result = [];
    for (const [key, PostData] of Object.entries(posts)) {
        let tempPostData: postData = PostData as postData;
        const tempPostID = { id: key }
        const tempPostItem: postItem = Object.assign(tempPostID, tempPostData);
        result.push(tempPostItem);
    }
    return result;
}

const findMasterNameByID = (id: number, list: masterItem[]) => {
    const target = list.find(item => item.id === id);
    return target ? target.name : '';
}

// export const state: StoreData = () => ({
//     posts: [],
//     masters: {
//         tags: [],
//         categories: []
//     }
// })

export const state: StoreData = {
    posts: [],
    masters: {
        tags: [],
        categories: []
    }
}

export const mutations = {
    mutateData(state: StoreData, payload: StoreData) {
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
    posts: (state: StoreData) => state.posts,
    getPost(state: StoreData) {
        return (id: string) => {
            const target = state.posts.find((post: postItem) => post.id === id);
            let result: postPageData;
            if (target && state.masters.categories !== [] && state.masters.tags !== []) {
                const categoryStr = findMasterNameByID(target.category, state.masters.categories);
                const tagStrList = target.tag.map((item: number) => findMasterNameByID(item, state.masters.tags));
                result = {
                    id: target.id,
                    title: target.title,
                    description: target.description,
                    thumbnail: target.thumbnail,
                    date: target.date,
                    category: categoryStr,
                    tag: tagStrList,
                    content: target.content,
                    html: ''
                };
            } else {
                result = {
                    id: '',
                    title: '',
                    description: '',
                    thumbnail: '',
                    date: '',
                    category: '',
                    tag: [''],
                    content: {
                        time: 0,
                        version: '',
                        blocks: []

                    },
                    html:''
                };
            }
            return result;
        }
    }
}
