import React from 'react';

export default () => {
    return (
        <div style={{
            background: "#F8F8F8",
            position: 'absolute',
            bottom: 0,
            padding: '2em 3em',
            width: '100%'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>React</span>
                <section>
                    <div>social</div>
                    <div>app download</div>
                </section>
            </div>
            <div>copy right</div>
        </div>
    )
};