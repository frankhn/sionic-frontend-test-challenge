import React, { ReactChildren } from 'react';
import Ads from './ads';
import Footer from './Footer';

export default ({ children }: any) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div style={{ flexBasis: '60%', marginBottom: '8em'}}>
                    {children}
                </div>
                {/* adds */}
                <Ads />
            </div>
            <Footer />
        </div>
    )
};