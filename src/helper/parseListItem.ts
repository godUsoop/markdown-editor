export interface ListItemContent {
    type: "li";
    content: string;
}

const parseListItem = (line: string): ListItemContent | null=> {
    if (line.startsWith("- ")) {
        return {type: "li", content: line.slice(2)};
    }
    return null;
};

export default parseListItem;