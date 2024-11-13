export type BaseProduct = {
    id: number;
    name: string;
    price: number;
    available: boolean;
    count?: number;
    description?: string;
    title?: string;
};

export type Electronics = BaseProduct & {
    category: 'electronics';
    warranty: string;
};

export type Clothing = BaseProduct & {
    category: 'clothing';
    size: string;
};

export type Book = BaseProduct & {
    category: 'book';
    author: string;
    genre: string;
    pagesCount?: number;
};