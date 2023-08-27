import React from 'react';
import { useEffect } from 'react';

const useDynamicTitle = title => {
    useEffect(()=>{
        document.title = `${title}-PhyICY`
    },[title])
    
};

export default useDynamicTitle;