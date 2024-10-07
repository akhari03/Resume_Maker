import React, { useState } from 'react';
import '../App.css';
import Education from './sub_comp/education';
import Experience from './sub_comp/experience';
import Project from './sub_comp/projects';
import Certificate from './sub_comp/cerificates';
import Personal from './sub_comp/personal';
import Contact from './sub_comp/contact';

function Form() {
    const [formData, setFormData] = useState({
        personal: {},
        contact: {},
        education: {},
        experience: {},
        project: {},
        certificate: {},
        skills: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/form_submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-3">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-lg-12 d-flex">
                                            <div className="col-lg-4"></div>
                                            <div className="col-lg-8">
                                                <h2 className="text-primary">Fill the Details Carefully</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="card-body">
                                        <Personal setFormData={setFormData} formData={formData} />
                                        <Contact setFormData={setFormData} formData={formData} />
                                        <div className="card mt-3">
                                            <div className="card-body">
                                                <div className="col-lg-12 d-flex flex-wrap my-2">
                                                    <div className="form-group col-lg-12 px-2">
                                                        <label htmlFor="skills" className="mb-1 form-label fw-bold">SKILLS:</label><br />
                                                        <textarea
                                                            placeholder="Enter your skills"
                                                            name="skills"
                                                            className="form-control col-lg-12"
                                                            id="skills"
                                                            value={formData.skills}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Education setFormData={setFormData} formData={formData} />
                                        <Experience setFormData={setFormData} formData={formData} />
                                        <Project setFormData={setFormData} formData={formData} />
                                        <Certificate setFormData={setFormData} formData={formData} />
                                    </div>
                                    <div className="card-footer mt-4">
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <button type="submit" className="btn btn-outline-primary">SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Form;