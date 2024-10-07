import React, { useState } from 'react';

function Education({ setFormData, formData }) {
    const [forms, setForms] = useState([{ edu_id: 1 }]);

    const addForm = () => {
        setForms([...forms, { edu_id: forms.length + 1 }]);
    };

    const handleChange = (e, eduId) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            education: {
                ...prevState.education,
                [`education-${eduId}`]: {
                    ...prevState.education[`education-${eduId}`],
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
                            <div className="col-lg-8"><h2 className="m-0">Education</h2></div>
                            <div className="col-lg-4 text-end">
                                <button onClick={addForm} className="btn btn-primary mt-3" type="button">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        {forms.map((form) => (
                            <div key={form.edu_id}>
                                <div className="card">
                                    <div className="card-header m-0 p-2">
                                        <div className="row">
                                            <div className="col-lg-12 d-flex">
                                                <div className="col-lg-8"><h2 className="m-0">Education Details {form.edu_id}</h2></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2">
                                    <div className="form-group col-lg-6 px-2">
                                        <label htmlFor={`class_degree-${form.edu_id}`} className="mb-1 form-label fw-bold">Degree / Class</label>
                                        <input 
                                            placeholder="Enter degree/class" 
                                            name="class_degree" 
                                            className="form-control col-lg-12" 
                                            id={`class_degree-${form.edu_id}`} 
                                            value={formData.education?.[`education-${form.edu_id}`]?.class_degree || ''}
                                            onChange={(e) => handleChange(e, form.edu_id)}
                                        />
                                    </div>
                                    <div className="form-group col-lg-6 px-2">
                                        <label htmlFor={`school-${form.edu_id}`} className="mb-1 form-label fw-bold">School/University</label>
                                        <input 
                                            placeholder="Enter school/university" 
                                            name="school" 
                                            className="form-control col-lg-12" 
                                            id={`school-${form.edu_id}`} 
                                            value={formData.education?.[`education-${form.edu_id}`]?.school || ''}
                                            onChange={(e) => handleChange(e, form.edu_id)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2">
                                    <div className="form-group col-lg-6 px-2">
                                        <label htmlFor={`percent_cgpa-${form.edu_id}`} className="mb-1 form-label fw-bold">Percentage/CGPA</label>
                                        <input 
                                            placeholder="Enter percentage/CGPA" 
                                            name="percent_cgpa" 
                                            className="form-control col-lg-12" 
                                            id={`percent_cgpa-${form.edu_id}`} 
                                            value={formData.education?.[`education-${form.edu_id}`]?.percent_cgpa || ''}
                                            onChange={(e) => handleChange(e, form.edu_id)}
                                        />
                                    </div>
                                    <div className="form-group col-lg-6 px-2">
                                        <label htmlFor={`pass_year-${form.edu_id}`} className="mb-1 form-label fw-bold">Passing out Year</label>
                                        <input 
                                            placeholder="Enter passing out year" 
                                            name="pass_year" 
                                            className="form-control col-lg-12" 
                                            id={`pass_year-${form.edu_id}`} 
                                            value={formData.education?.[`education-${form.edu_id}`]?.pass_year || ''}
                                            onChange={(e) => handleChange(e, form.edu_id)}
                                        />
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;