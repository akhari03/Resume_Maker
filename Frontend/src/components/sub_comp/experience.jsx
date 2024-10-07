import React, { useState } from 'react';
import '../../App.css';

function Experience({ setFormData, formData }) {
    const [forms, setForms] = useState([{ exp_id: 1 }]);

    const addForm = () => {
        const newExpId = forms.length + 1;
        setForms([...forms, { exp_id: newExpId }]);
        setFormData(prevState => ({
            ...prevState,
            experience: {
                ...prevState.experience,
                [`experience-${newExpId}`]: {
                    work_name: '',
                    location: '',
                    start_mon: '',
                    end_mon: '',
                    desc_exp: ''
                }
            }
        }));
    };

    const handleChange = (e, expId) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            experience: {
                ...prevState.experience,
                [expId]: {
                    ...prevState.experience[expId],
                    [name]: value
                }
            }
        }));
    };

    return (
        <>
            <div className="card mt-3">
                <div className="mt-3 ms-2">
                    <div className="row mx-2">
                        <div className="col-lg-12 d-flex">
                            <div className="col-lg-8"><h2 className="m-0">Experience</h2></div>
                            <div className="col-lg-4 text-end">
                                <button onClick={addForm} className="btn btn-primary mt-3" type="button">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {forms.map((form) => (
                        <div key={form.exp_id}>
                            <div className="card">
                                <div className="card-header m-0 p-2">
                                    <div className="row">
                                        <div className="col-lg-12 d-flex">
                                            <div className="col-lg-8">
                                                <h2 className="m-0">Experience Details {form.exp_id}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 d-flex flex-wrap my-2">
                                <div className="form-group col-lg-12 px-2">
                                    <label htmlFor={`work_name-${form.exp_id}`} className="mb-1 form-label fw-bold">Worked as</label>
                                    <input 
                                        placeholder="e.g. - Software Developer" 
                                        name="work_name" 
                                        className="form-control col-lg-12" 
                                        id={`work_name-${form.exp_id}`} 
                                        value={formData.experience[`experience-${form.exp_id}`]?.work_name || ''}
                                        onChange={(e) => handleChange(e, `experience-${form.exp_id}`)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 d-flex flex-wrap my-2">
                                <div className="form-group col-lg-4 px-2">
                                    <label htmlFor={`location-${form.exp_id}`} className="mb-1 form-label fw-bold">Location</label>
                                    <input 
                                        placeholder="Location" 
                                        name="location" 
                                        className="form-control col-lg-12" 
                                        id={`location-${form.exp_id}`} 
                                        value={formData.experience[`experience-${form.exp_id}`]?.location || ''}
                                        onChange={(e) => handleChange(e, `experience-${form.exp_id}`)}
                                    />
                                </div>
                                <div className="form-group col-lg-4 px-2">
                                    <label htmlFor={`start_mon-${form.exp_id}`} className="mb-1 form-label fw-bold">Start Month</label>
                                    <input 
                                        type="date" 
                                        name="start_mon" 
                                        className="form-control col-lg-12" 
                                        id={`start_mon-${form.exp_id}`} 
                                        value={formData.experience[`experience-${form.exp_id}`]?.start_mon || ''}
                                        onChange={(e) => handleChange(e, `experience-${form.exp_id}`)}
                                    />
                                </div>
                                <div className="form-group col-lg-4 px-2">
                                    <label htmlFor={`end_mon-${form.exp_id}`} className="mb-1 form-label fw-bold">End Month</label>
                                    <input 
                                        type="date" 
                                        name="end_mon" 
                                        className="form-control col-lg-12" 
                                        id={`end_mon-${form.exp_id}`} 
                                        value={formData.experience[`experience-${form.exp_id}`]?.end_mon || ''}
                                        onChange={(e) => handleChange(e, `experience-${form.exp_id}`)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 d-flex flex-wrap my-2">
                                <div className="form-group col-lg-12 px-2">
                                    <label htmlFor={`desc_exp-${form.exp_id}`} className="mb-1 form-label fw-bold">Description</label>
                                    <textarea 
                                        placeholder="Describe your work experience" 
                                        name="desc_exp" 
                                        className="form-control col-lg-12" 
                                        id={`desc_exp-${form.exp_id}`} 
                                        value={formData.experience[`experience-${form.exp_id}`]?.desc_exp || ''}
                                        onChange={(e) => handleChange(e, `experience-${form.exp_id}`)}
                                    />
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Experience;