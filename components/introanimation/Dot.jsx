import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Dot = forwardRef((props, ref) => {

    return (
        <svg id="LL." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1689.41 406.47" >
            <path ref={ref} className="cls-1" d="M1161.84,226.18c6.38,0,11.87,2.31,16.46,6.93,4.59,4.62,6.88,10.12,6.88,16.5s-2.28,11.8-6.84,16.26c-4.56,4.46-10.06,6.69-16.5,6.69s-12.22-2.17-16.55-6.49c-4.33-4.33-6.49-9.85-6.49-16.55s2.25-12.03,6.74-16.55c4.49-4.52,9.93-6.79,16.31-6.79Z"/>
        </svg>
    );
});

export default Dot;
