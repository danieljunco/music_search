import { ApiResponse, Suggestion, ApiError } from "./typesApi";
import placeholder from '../assets/suggestion-placeholder.png'



const apiUrl = 'https://itunes.apple.com/search?'

class ApiClient {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl
    }



    async getSuggestionList(
        searchText: string = '',
        entity: string,
        limit: number = 3
    ): Promise<ApiResponse<Suggestion> | ApiError> {
        try {
            const response = await fetch(
                `${apiUrl}term=${searchText}&media=music&entity=${entity}&limit=${limit}`,
                {
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            );
            const data: ApiResponse<Suggestion> = await response.json();

            return data;
        } catch (err) {
            console.error(err);
            return {
                message: "An error has ocurred while fetching data",
            } as ApiError;
        }
    }

    buildSuggestionPreviewImageUrl(imageUrl: string):string {
        if(!imageUrl) return placeholder;
        return imageUrl
    }
}

export default new ApiClient(apiUrl);