interface Interaction {
    from: string;
    to: string;
    message: string;
    dashed: boolean;
}

const parseSequenceDiagram = (input: string) => {
    const lines = input.split('\n');
    const interactions: Interaction[] = lines.map((line) => {
        const match = line.match(/(\w+)\s*(-{1,2}>)\s*(\w+):\s*(.+)/);
        if (match) {
            return {
                from: match[1],
                to: match[3],
                message: match[4],
                dashed: match[2] === '-->',
            };
        }
        return null;
    }).filter((interaction) => interaction !== null) as Interaction[];

    const participants = Array.from(
        new Set(interactions.flatMap((interaction) => [interaction.from, interaction.to]))
    );
    
    return {interactions, participants};
};

export default parseSequenceDiagram;