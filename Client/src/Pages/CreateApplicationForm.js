import React from 'react';
import { useState } from "react";
import { createGlobalStyle } from 'styled-components';

export default function CreateApplicationForm () {

    const [formData, setFormData] = useState({
        jobCategory: "",
        jobRole: "",
        company: "",
        location: "",
        status: "",
        notes: "",
    });
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted");
    }

    const handleReset = (event) => {
        event.preventDefault(); // Optional, prevents default reset behavior
        setFormData({
            jobCategory: "",
            jobRole: "",
            company: "",
            location: "",
            status: "",
            notes: "",
        });
        console.log("Form reset");
    };


    const formStyle = {
        marginLeft: "50px",
        width: "450px"
    };

    const inputStyle = {
        marginRight: "15px",
        fontSize: "larger",
        marginBottom: "15px",
        minWidth: "-webkit-fill-available",
        
    };

    const labelStyle = {
        marginRight: "15px",
        fontSize: "larger",
        marginBottom: "15px",
        minWidth: "150px"
    };

    const divStyle = {
            display: "flex"
    }

    const buttonStyle = {
        background: "#244272",
        color: "white",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        cursor: "grabbing"
    }

    const buttonDiv = {
        display: "flex",
        justifyContent: "flex-end",
        width: "600px"
    }

    return (           
        <div className="flex h-screen" style={formStyle}>
                
        <h1 className="text-2xl font-bold my-4">Add Application Record</h1>
        <form className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2" onSubmit={handleSubmit} onReset={handleReset}>
            <div style={divStyle}>
                <label style={labelStyle}>Job Category:</label>
                <select 
                    name="jobCategory"
                    value={formData.jobCategory}
                    onChange={handleChange}
                    style={inputStyle}
                >
                    <option value="">Select</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                </select>
            </div>
            <div style={divStyle}>
                <label style={labelStyle}>Job Role:</label>
                <input
                    type="text"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <div style={divStyle}>
                <label style={labelStyle}>Company:</label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <div style={divStyle}>
                <label style={labelStyle}>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <div style={divStyle}>
                <label style={labelStyle}>Status:</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    style={inputStyle}
                >
                    <option value="">Select</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            <div style={divStyle}>
                <label style={labelStyle}>Notes:</label>
                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <div className="flex" style={buttonDiv}>
                <input type="submit" style={buttonStyle} />
                <div style={{width:"10px"}}></div>
                <input type="reset" style={buttonStyle} />
            </div>          
        </form>      
      </div>
    );
}