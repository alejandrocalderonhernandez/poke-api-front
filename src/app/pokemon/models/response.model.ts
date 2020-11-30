export class ResponseInfo {
    totalRecords: number;
    results: Array<string>;

    constructor(totalRecords: number,
                results: Array<string>) {
        this.totalRecords = totalRecords;
        this.results = results;        
    }
} 