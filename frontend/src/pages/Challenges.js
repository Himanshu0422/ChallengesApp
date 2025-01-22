import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

const Challenges = () => {

    return (
        <div>
            <div>
                <Layout>
                    <Outlet />
                </Layout>
            </div>
        </div>
    )
}

export default Challenges;