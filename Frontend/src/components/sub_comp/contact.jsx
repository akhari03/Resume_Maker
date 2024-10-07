import React from 'react';
import '../../App.css';

function Contact({ setFormData, formData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            contact: {
                ...prevState.contact,
                [name]: value
            }
        }));
    };

    return (
        <>
            <div className="card mt-3">
                <div className="card-header">
                    <div className="row mt-3 ms-2">
                        <div className="col-lg-12 d-flex">
                            <div className="col-lg-8"><h2 className="m-0">Contact Details</h2></div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="col-lg-12 d-flex flex-wrap my-2">
                        <div className="form-group col-lg-6 px-2">
                            <label htmlFor="GitHub" className="mb-1 form-label fw-bold">GitHub profile</label><br/>
                            <input
                                placeholder="Enter your GitHub profile"
                                name="GitHub"
                                className="form-control col-lg-12"
                                id="GitHub"
                                value={formData.contact?.GitHub || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-lg-6 px-2">
                            <label htmlFor="LinkedIn" className="mb-1 form-label fw-bold">LinkedIn profile</label><br/>
                            <input
                                placeholder="Enter your LinkedIn profile"
                                name="LinkedIn"
                                className="form-control col-lg-12"
                                id="LinkedIn"
                                value={formData.contact?.LinkedIn || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;