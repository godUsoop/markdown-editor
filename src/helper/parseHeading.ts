interface Heading1Content {
    type: "h1";
    content: string;
}

interface Heading2Content {
    type: "h2";
    content: string;
}

interface Heading3Content {
    type: "h3";
    content: string;
}

export type HeadingContent = Heading1Content | Heading2Content | Heading3Content;


const parseHeading = (line: string): HeadingContent | null => {
    if (line.startsWith("# ")) {
        return {type: "h1", content: line.slice(2)};
    } else if (line.startsWith("## ")) {
        return {type: "h2", content: line.slice(3)};
    } else if (line.startsWith("### ")) {
        return {type: "h3", content: line.slice(4)};
    }
    return null;
};

export default parseHeading;