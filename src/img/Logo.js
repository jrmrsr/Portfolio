import React from "react";

const SVG = ({
    width = "100%",
    height = "100%",
    className = "",
    viewBox = "0 0 150 150"
    }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox={viewBox}>
        <path fill="rgb(63,136,197)" stroke="none" d="M0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75Z"/>
        <defs>
            <clipPath id="clip_0">
                <path d="M75 0C33.5786 0 0 33.5786 0 75C0 116.421 33.5786 150 75 150C116.421 150 150 116.421 150 75C150 33.5786 116.421 0 75 0Z" clipRule="evenodd"/>
            </clipPath>
        </defs>
        <g clipPath="url(#clip_0)">
            <text fill="#fff" stroke="none" fontSize="130" fontWeight="bold" fontFamily="Sarabun Extra-Bold, Sarabun" x="0.31713867" y="117.72266">
                    JR
            </text>
        </g>
    
    </svg>
    );

export default SVG;
