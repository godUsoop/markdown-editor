import { JSX } from "react";
import parseHeading, { HeadingContent } from "./helper/parseHeading";
import parseListItem, { ListItemContent } from "./helper/parseListItem";
import parseBoldText, { BoldTextContent } from "./helper/parseBoldText";
import parseLineBreak, { LineBreakContent } from "./helper/parseLineBreak";
import parseParagraph, { ParagraphContent } from "./helper/parseParagraph";

interface TextProps {
    input: string;
}

type ParsedContent = BoldTextContent | HeadingContent | LineBreakContent | ListItemContent | ParagraphContent

const renderElement = (result: ParsedContent, key: number): JSX.Element => {
    switch (result.type) {
        case "h1":
            return <h1 key={key}>{result.content}</h1>;
        case "h2":
            return <h2 key={key}>{result.content}</h2>;
        case "h3":
            return <h3 key={key}>{result.content}</h3>;
        case "li":
            return <li key={key}>{result.content}</li>;
        case "p":
            return (
                <p key={key}>
                    {result.content.map((part, i) =>
                        typeof part === "string" ? (
                            part
                        ) : (
                            <strong key={i}>{part.bold}</strong>
                        )
                    )}
                </p>
            );
        case "br":
            return <br key={key} />;
        default:
            throw new Error("Unknown render type");
    }
};


const Text = ({input}: TextProps): JSX.Element[] => {
    const lines = input.split("\n");
    const results = lines.map((line) =>
        parseHeading(line) ||
        parseListItem(line) ||
        parseBoldText(line) ||
        parseLineBreak(line) ||
        parseParagraph(line)
    );

    return results.map((result, index) => renderElement(result, index));
};

export default Text;