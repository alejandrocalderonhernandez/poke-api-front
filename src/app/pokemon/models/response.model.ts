export class ResponseInfo {
    nextPage: string;
    previousPage: string;
    results: Array<string>;

    constructor(nextPage: string,
                previousPage: string,
                results: Array<string>) {
        this.nextPage = nextPage;
        this.previousPage = previousPage;
        this.results = results;        
    }
} 