"use client";

import React, { createContext, useContext, useState } from 'react';

type MetadataContextType = {
    title: string;
    description: string;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
};

const MetadataContext = createContext<MetadataContextType | null>(null);

export const MetadataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [title, setTitle] = useState('Sync Design Technologies');
    const [description, setDescription] = useState('Your All-in-One Digital Partner for Web, Apps, and Brand Success | Your Brand, Your Ideas, Your Identity');

    return (
        <MetadataContext.Provider value={{ title, description, setTitle, setDescription }}>
            {children}
        </MetadataContext.Provider>
    );
};

export const useMetadata = () => {
    const context = useContext(MetadataContext);
    if (!context) {
        throw new Error('useMetadata must be used within a MetadataProvider');
    }
    return context;
};