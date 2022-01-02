export interface masterItem {
    id: number,
    name: string
}

export interface postBase {
    title: string,
    description: string,
    thumbnail: string,
    date: string,
    content: {
        time: number,
        blocks: [],
        version: string
    }
}

export interface postData extends postBase {
    category: number,
    tag: number[],
}

export interface postPageData extends postBase {
    id: string,
    category: string,
    tag: string[],
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