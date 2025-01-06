import React from 'react';
import parseSequenceDiagram from './helper/parseSequenceDiagram';

interface SequenceDiagramProps {
    input: string;
}

const SequenceDiagram = ({ input }: SequenceDiagramProps) => {
    const {interactions, participants} = parseSequenceDiagram(input);
    
    const participantPositions = participants.reduce((acc, participant, index) => {
        acc[participant] = index * 200 + 100;
        return acc;
    }, {} as { [key: string]: number });
    
    const dynamicHeight = 100 + interactions.length * 80;

    return (
        <svg width="100%" height={dynamicHeight} style={{ backgroundColor: '#fff', border: '1px solid #ccc' }}>
            {participants.map((participant) => (
                <g key={participant}>
                    <rect
                        x={participantPositions[participant] - 75}
                        y={10}
                        width={150}
                        height={40}
                        fill="#f0f0f0"
                        stroke="#999"
                        rx="5"
                    />
                    <text
                        x={participantPositions[participant]}
                        y={35}
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="bold"
                        fill="#333"
                    >
                        {participant}
                    </text>
                    <line
                        x1={participantPositions[participant]}
                        y1={50}
                        x2={participantPositions[participant]}
                        y2={dynamicHeight}
                        stroke="#ccc"
                        strokeDasharray="4,2"
                    />
                </g>
            ))}

            {interactions.map((interaction, index) => {
                const fromX = participantPositions[interaction.from];
                const toX = participantPositions[interaction.to];
                const y = 100 + index * 80;

                return (
                    <g key={index}>
                        <line
                            x1={fromX}
                            y1={y}
                            x2={toX}
                            y2={y}
                            stroke="#000"
                            markerEnd="url(#arrow)"
                            strokeDasharray={interaction.dashed ? "5,5" : undefined}
                        />
                        <text
                            x={(fromX + toX) / 2}
                            y={y - 10}
                            textAnchor="middle"
                            fontSize="14"
                            fill="#000"
                        >
                            {interaction.message}
                        </text>
                    </g>
                );
            })}
            <defs>
                <marker
                    id="arrow"
                    markerWidth="10"
                    markerHeight="10"
                    refX="10"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                >
                <path d="M0,0 L0,6 L9,3 z" fill="#000" />
                </marker>
            </defs>
        </svg>
    );
};

export default SequenceDiagram;