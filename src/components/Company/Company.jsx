import React, { useState, useEffect } from 'react';
import "./Company.css"
function Company() {
    const [documents, setDocuments] = useState([
        {
            title: 'Title 1',
            description: 'Description of doc1',
            accessDate: 'December 14, 2025 by Samira'
        },
        {
            title: 'Title 2',
            description: 'Description of doc2',
            accessDate: 'December 14, 2025 by Samira'
        }
    ]);
    return (
        <div className='CompanyCoverage'>
            {
                documents.map((doc, index) => {
                    return (
                        <div className="document-item">
                            <div className="document-title">
                                <h3>{doc.title}</h3>
                            </div>
                            <div className="document-description">
                                <p>{doc.description}</p>
                            </div>
                            <div className="document-footer">
                                <button className='document-access'>Access Doc</button>
                                <div className="document-meta">
                                    <p>{doc.accessDate}</p>
                                    <img src="" alt="" />

                                </div>
                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
};

export default Company;
