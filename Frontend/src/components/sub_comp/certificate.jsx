import React, { useState } from 'react';
import '../../App.css';

function Certificate({ setFormData, formData }) {
    const [forms, setForms] = useState([{ certi_id: 1 }]);

    const addForm = () => {
        setForms([...forms, { certi_id: forms.length + 1 }]);
    };

    const handleChange = (e, certiId) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            certificates: {
                ...prevState.certificates,
                [`certificate-${certiId}`]: {
                    ...prevState.certificates[`certificate-${certiId}`],
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
                            <div className="col-lg-8"><h2 className="m-0">Certifications</h2></div>
                            <div className="col-lg-4 text-end">
                                <button onClick={addForm} className="btn btn-primary mt-3" type="button">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        {forms.map((form) => (
                            <div key={form.certi_id}>
                                <div className="card mb-2">
                                    <div className="card-header m-0 p-2">
                                        <div className="row">
                                            <div className="col-lg-12 d-flex">
                                                <div className="col-lg-8"><h3 className="m-0">Certification Details {form.certi_id}</h3></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2">
                                    <div className="form-group col-lg-12 px-2">
                                        <label htmlFor={`cert_name-${form.certi_id}`} className="mb-1 form-label fw-bold">Certification Title</label>
                                        <input
                                            placeholder="Enter certification title"
                                            name="cert_name"
                                            className="form-control col-lg-12"
                                            id={`cert_name-${form.certi_id}`}
                                            value={formData.certificates?.[`certificate-${form.certi_id}`]?.cert_name || ''}
                                            onChange={(e) => handleChange(e, form.certi_id)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2">
                                    <div className="form-group col-lg-6 px-2">
                                        <label htmlFor={`link_drive-${form.certi_id}`} className="mb-1 form-label fw-bold">Drive Link</label>
                                        <input
                                            placeholder="Enter drive link"
                                            name="link_drive"
                                            className="form-control col-lg-12"
                                            id={`link_drive-${form.certi_id}`}
                                            value={formData.certificates?.[`certificate-${form.certi_id}`]?.link_drive || ''}
                                            onChange={(e) => handleChange(e, form.certi_id)}
                                        />
                                    </div>
                                    <div className="form-group col-lg-6 px-2">
                                        <label htmlFor={`month_year-${form.certi_id}`} className="mb-1 form-label fw-bold">Month & Year</label>
                                        <input
                                            placeholder="Enter month & year"
                                            name="month_year"
                                            className="form-control col-lg-12"
                                            id={`month_year-${form.certi_id}`}
                                            value={formData.certificates?.[`certificate-${form.certi_id}`]?.month_year || ''}
                                            onChange={(e) => handleChange(e, form.certi_id)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2">
                                    <div className="form-group col-lg-12 px-2">
                                        <label htmlFor={`desc_cert-${form.certi_id}`} className="mb-1 form-label fw-bold">Description</label>
                                        <textarea
                                            placeholder="Enter description"
                                            name="desc_cert"
                                            className="form-control col-lg-12"
                                            id={`desc_cert-${form.certi_id}`}
                                            value={formData.certificates?.[`certificate-${form.certi_id}`]?.desc_cert || ''}
                                            onChange={(e) => handleChange(e, form.certi_id)}
                                        />
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Certificate;