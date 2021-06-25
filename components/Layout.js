import React from 'react'
import { Row, Column } from '@noon/atom';
import { IconLogo, IconNoon } from '@noon/quark';

export default ({ children }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        'justifyContent': 'start',
        'alignItems': 'start',
        height: '100%',
        width: '100vw'
    }}>
        {children}
    </div>
)