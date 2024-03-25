// Import necessary libraries
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Define your functional component
const LandingPage = () => {
    // Define state variables
    const [storeInfo, setStoreInfo] = useState(null);

    // Fetch store information from the API
    useEffect(() => {
        axios.get('https://api.example.com/storeinfo')
            .then(response => {
                setStoreInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching store information:', error);
            });
    }, []);

    return (
        <section>
            <h2>About Our Store</h2>
            {storeInfo ? (
                <div>
                    <p>{storeInfo.name}</p>
                    <p>{storeInfo.description}</p>
                    {/* Render other store information as needed */}
                </div>
            ) : (
                <p>Loading store information...</p>
            )}
        </section>
    );
};

// Render the component
ReactDOM.render(<LandingPage />, document.getElementById('dynamic-content'));
