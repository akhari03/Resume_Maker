import React, { useState } from 'react';

function Project({ setFormData, formData }) {
    const [forms, setForms] = useState([{ proj_id: 1 }]);

    const addForm = () => {
        setForms([...forms, { proj_id: forms.length + 1 }]);
    };

    const handleChange = (e, projId) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            project: {
                ...prevState.project,
                [`project-${projId}`]: {
                    ...prevState.project[`project-${projId}`],
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
                            <div className="col-lg-8"><h2 className="m-0">Academic Projects</h2></div>
                            <div className="col-lg-4 text-end">
                                <button onClick={addForm} className="btn btn-primary mt-3" type="button">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        {forms.map((form) => (
                            <div key={form.proj_id}>
                                <div className="card mb-2">
                                    <div className="card-header m-0 p-2">
                                        <div className="row">
                                            <div className="col-lg-12 d-flex">
                                                <div className="col-lg-8"><h3 className="m-0">Project Details {form.proj_id}</h3></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2">
                                    <div className="form-group col-lg-12 px-2">
                                        <label htmlFor={`project_name-${form.proj_id}`} className="mb-1 form-label fw-bold">Project Title</label>
                                        <input 
                                            placeholder="Enter project title" 
                                            name="project_name" 
                                            className="form-control col-lg-12" 
                                            id={`project_name-${form.proj_id}`} 
                                            value={formData.project?.[`project-${form.proj_id}`]?.project_name || ''}
                                            onChange={(e) => handleChange(e, form.proj_id)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2">
                                    <div className="form-group col-lg-6 px-2">
                                        <label htmlFor={`link_dep-${form.proj_id}`} className="mb-1 form-label fw-bold">Deployed Link (Optional)</label>
                                        <input 
                                            placeholder="Enter deployed link" 
                                            name="link_dep" 
                                            className="form-control col-lg-12" 
                                            id={`link_dep-${form.proj_id}`} 
                                            value={formData.project?.[`project-${form.proj_id}`]?.link_dep || ''}
                                            onChange={(e) => handleChange(e, form.proj_id)}
                                        />
                                    </div>
                                    <div className="form-group col-lg-6 px-2">
                                        <label htmlFor={`tecno_used-${form.proj_id}`} className="mb-1 form-label fw-bold">Technologies Used</label>
                                        <input 
                                            placeholder="Enter technologies used" 
                                            name="tecno_used" 
                                            className="form-control col-lg-12" 
                                            id={`tecno_used-${form.proj_id}`} 
                                            value={formData.project?.[`project-${form.proj_id}`]?.tecno_used || ''}
                                            onChange={(e) => handleChange(e, form.proj_id)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2">
                                    <div className="form-group col-lg-12 px-2">
                                        <label htmlFor={`desc_pro-${form.proj_id}`} className="mb-1 form-label fw-bold">Description</label>
                                        <textarea 
                                            placeholder="Enter project description" 
                                            name="desc_pro" 
                                            className="form-control col-lg-12" 
                                            id={`desc_pro-${form.proj_id}`} 
                                            value={formData.project?.[`project-${form.proj_id}`]?.desc_pro || ''}
                                            onChange={(e) => handleChange(e, form.proj_id)}
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

export default Project;