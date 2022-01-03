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
    html: string
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
        tags: masterItem[] | [],
        categories: masterItem[] | []
    }
}

export interface headerItem {
    text: string,
    level: number,
  }
  
  export interface paragraphItem {
    text: string
  }
  
  export interface listItem {
    items: string[],
    style: string
  }
  
  export interface imageItem {
    caption: string,
    file: {
      url: string
    },
    stretched: boolean,
    withBackground: boolean,
    withBorder: boolean
  }
  
  export interface ElementItem {
    data: headerItem | paragraphItem | listItem | imageItem,
    id: string,
    type: string
  }