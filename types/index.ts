export type WinnerItem = {
    type: string;
    id: string;
    attributes: {
        amountWon: number;
        winnerName: string;
        wonAt: string;
        winnerPhoto: string;
        published: number;
        scholarshipTitle: string;
        testimonialVideo: string;
        testimonialText: string;
    };
    links: {
        self: string;
    };
}

export type MetaData = {
    pagination: {
        total: number;
        count: number;
        per_page: number;
        current_page: number;
        total_pages: number;
    }
}

export type Links = {
    self: string;
    first: string;
    prev: string | null;
    next: string | null;
    last: string;
}

export type WinnersResponse = {
    data: WinnerItem[];
    meta: MetaData;
    links: Links;
}

export type pagination = {
    first: number
    page: number
    pageCount: number
    rows: number
}