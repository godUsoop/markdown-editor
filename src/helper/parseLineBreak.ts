export interface LineBreakContent {
    type: "br";
}

const parseLineBreak = (line: string): LineBreakContent | null => {
    if (line.trim() === "") {
        return {type: "br"};
    }
    return null;
};

export default parseLineBreak;