/**
 * @module DataFilter
 * @description Search and filter through JSON objects.
 */
export const searchItems = (query, dataList) => {
    return dataList.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
    );
};
console.log("Demo 2: Data Filter Script Active.");

