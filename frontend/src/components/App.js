import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get('/api/plans');
                setPlans(response.data);
            } catch (error) {
                console.error('Error fetching plans:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Plans</h1>
            <ul>
                {plans.map(plan => (
                    <li key={plan._id}>{plan.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;