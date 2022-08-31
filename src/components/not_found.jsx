import React from "react";  
import Layout from './shared/layout';


const NotFound = () => {
    const style = {
        fontWeight: 'bold',
        textAlign:'center',
    }
    return (
        <Layout>
            <p style={style}>Unfortuantely. This page is not available</p>
        </Layout>
    )
}
export default NotFound;