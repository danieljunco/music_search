export type ApiResponse<T> = {
    resultCount: number,
    results: T[]
}


export type CategoryKey = 'collectionId' | 'artistId' | 'trackId'


export type Suggestion = {
    artistId?: number,
    artistName?: string,
    artistViewUrl?: string,
    collectionId?: number,
    collectionName?: string,
    artworkUrl60?: string,
    releaseDate?: string,
    wrapperType: string,
    primaryGenreName?: string,
    artistLinkUrl?: string,
    trackViewUrl?: string,
    trackId?: number,
    trackName?: string,
    collectionViewUrl?: string
}

export type SuggestionCategories = {
    [key: string]: Suggestion[]
}


export type ApiError = {
    message: string;
    isError: true;
};

type ApiResponseGeneric<T> = ApiError | ApiResponse<T>

export function isApiError<T>(data: ApiResponseGeneric<T>): data is ApiError {
    return (data as ApiError).isError;
}
