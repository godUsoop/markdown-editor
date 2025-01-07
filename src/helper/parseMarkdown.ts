const parseMarkdown = (markdown: string): Array<{type: 'text' | 'diagram'; content: string}> => {
    const regex = /!sequenceDiagram\n([\s\S]*?)\n!/g;
    const result: Array<{type: 'text' | 'diagram'; content: string }> = [];
    let lastIndex = 0;
    let match;
    
    while ((match = regex.exec(markdown)) !== null) {
        if (lastIndex < match.index) {
            result.push({type: 'text', content: markdown.slice(lastIndex, match.index).trim()});
        }

        result.push({type: 'diagram', content: match[1].trim()});
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < markdown.length) {
        result.push({type: 'text', content: markdown.slice(lastIndex).trim()});
    }

    return result;
};

export default parseMarkdown;