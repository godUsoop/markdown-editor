export interface BoldTextContent {
    type: "p"; 
    content: (string | { bold: string })[]
}

const parseBoldText = (line: string): BoldTextContent | null => {
    if (line.includes("**")) {
        const parts = line.split(/(\*\*.*?\*\*)/).map((part) =>
            part.startsWith("**") && part.endsWith("**")
                ? {bold: part.slice(2, -2)}
                : part
        );
        return {type: "p", content: parts};
    }
    return null;
};

export default parseBoldText;