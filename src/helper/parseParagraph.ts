export interface ParagraphContent {
    type: "p";
    content: (string | { bold: string })[];
}

const parseParagraph = (line: string): ParagraphContent => {
    return {type: "p", content: [line]};
};

export default parseParagraph;