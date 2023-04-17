import styles from "/styles/customers.module.css";
import data from '/data/data'
import React, { useState, useEffect } from "react";
import Spinner from "/components/Spinner";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        data.customers()
            .then((data) => {
                setCustomers(data);
                setLoading(false);
                console.log("API response:", data);
            })
            .catch((error) => {
                console.log("API error:", error);
                setLoading(false);
            });
    }, []);

    console.log("Customers state:", customers);
    console.log("Loading state:", loading);

    if (loading) {
        return <Spinner/>;
    } else {
        return (
            <>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((c, i) => (
                            <tr key={i}>
                                <td data-label="name">{c.name}</td>
                                <td data-label="email">{c.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
};

export default Customers;
