import React from 'react';
import '../../App.css';

function Personal({ setFormData, formData }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            personal: {
                ...prevState.personal,
                [name]: value
            }
        }));
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="row mt-3 ms-2">
                        <div className="col-lg-12 d-flex">
                            <div className="col-lg-8"><h2 className="m-0">Personal Information</h2></div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="col-lg-12 d-flex flex-wrap my-2">
                        <div className="form-group col-lg-6 px-2">
                            <label htmlFor="username" className="mb-1 form-label fw-bold">Full Name</label>
                            <input
                                placeholder="e.g - Dev Naagar"
                                name="username"
                                className="form-control col-lg-12"
                                id="username"
                                value={formData.personal?.username || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-lg-6 px-2">
                            <label htmlFor="mail" className="mb-1 form-label fw-bold">Email</label>
                            <input
                                placeholder="e.g - YOUR_NAME@gmail.com"
                                name="mail"
                                className="form-control col-lg-12"
                                id="mail"
                                value={formData.personal?.mail || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex flex-wrap my-2">
                        <div className="form-group col-lg-6 px-2">
                            <label htmlFor="phoneno" className="mb-1 form-label fw-bold">Mobile NO.</label>
                            <input
                                placeholder="Mobile No."
                                name="phoneno"
                                className="form-control col-lg-12"
                                id="phoneno"
                                value={formData.personal?.phoneno || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-lg-6 px-2">
                            <label htmlFor="address" className="mb-1 form-label fw-bold">Address</label>
                            <input
                                placeholder="Enter your address"
                                name="address"
                                className="form-control col-lg-12"
                                id="address"
                                value={formData.personal?.address || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Personal;