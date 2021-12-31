export interface masterItem {
    id: number,
    name: string
}

export interface postData {
    title: string,
    description: string,
    thumbnail: string,
    date: string,
    category: number,
    tag: number[],
    content: {
        time: number,
        blocks: [],
        version: string
    }
}

export interface postItem extends postData {
    id: string
}

export interface RenderTree {
    id: string;
    name: string;
    children?: readonly RenderTree[];
}

export interface StoreData {
    posts: postItem[] | [],
    masters: {
        tags: masterItem | [],
        categories: masterItem | []
    }
}