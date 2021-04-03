import React, { useState } from 'react'
import Navbar from './Navbar'




function Noticeadd() {
    const [noticeType, setnoticeType] = useState("");
    const [noticeTitle, setnoticeTitle] = useState("");
    const [noticeDes, setnoticeDes] = useState("");
    const [noticeDate, setnoticeDate] = useState("");
    const [noticeFile, setnoticeFile] = useState("");
    const [noticeLink, setnoticeLink] = useState("");

    const handlenoticeType = (e) => {
        console.log(e.target.value);
        // setnoticeType(e.target.value);
    }
    const handlenoticeTitle = (e) => {
        console.log(e.target.value);
        // setnoticeTitle(e.target.value);
    }
    const handlenoticeDes = (e) => {
        console.log(e.target.value);
        // setnoticeDes(e.target.value);
    }
    const handlenoticeDate = (e) => {
        console.log(e.target.value);
        // setnoticeDate(e.target.value);
    }
    const handlenoticeFile = (e) => {
        console.log(e.target.value);
        // setnoticeFile(e.target.value);
    }
    const handlenoticeLink = (e) => {
        console.log(e.target.value);
        // setnoticeLink(e.target.value);
    }



    return (
        <>
            <Navbar />
            <style>{'body { background-color: #f0f5f1; }'}</style>
            <div className="container my-3">
                <div className="row m-auto">
                    <div className="col-lg-12 col-md-10 col-sm-10 m-auto">
                        <div className="card shadow">
                            <div className="card-body">
                                <form >
                                    <div className="row mt-2">
                                        <div className="col-lg-8 col-md-8 col-sm-9 m-auto">

                                            {/* noticeType */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fab fa-accusoft"></i>
                                                    </span>
                                                </div>
                                                <select
                                                    value={noticeType}
                                                    onChange={handlenoticeType}
                                                    className="custom-select">
                                                    <option value={null}>-Notice Type-</option>
                                                    <option value="school">School</option>
                                                    <option value="college">College</option>
                                                    <option value="office">Office</option>
                                                </select>
                                            </div>
                                            {/* noticeTitle */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fab fa-tumblr-square"></i>
                                                    </span>
                                                </div>
                                                <input

                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Notice title"
                                                    aria-label="Name"
                                                    aria-describedby="basic-addon1"
                                                    value={noticeTitle}
                                                    onChange={handlenoticeTitle}
                                                // onChange={(e) => setshortName(e.target.value)}

                                                />

                                                {/* <small className="text-warning float-right mt-3">max:50</small> */}
                                            </div>

                                            {/* noticeDescription */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-file-prescription"></i>
                                                    </span>
                                                </div>
                                                <textarea
                                                    value={noticeDes}
                                                    onChange={handlenoticeDes}

                                                    className="form-control" aria-label="With textarea" placeholder="InstituteTypeDescription"></textarea>


                                            </div>

                                            {/* noticeDate */}

                                            <div class="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i class="fas fa-calendar-week"></i>
                                                    </span>
                                                </div>

                                                <input
                                                    value={noticeDate}
                                                    onChange={handlenoticeDate}
                                                    className="form-control"
                                                    type="date"
                                                    id="formFile" />
                                                <label className="text mt-2">Select notice date</label>
                                            </div>



                                            {/* noticeFile */}
                                            <div class="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-file"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    value={noticeFile}
                                                    onChange={handlenoticeFile}
                                                    className="form-control"
                                                    type="file"
                                                    id="formFile" />
                                                <label className="text pt-2">Upload notice file</label>
                                            </div>

                                            {/* noticeLink */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <p className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-link"></i>
                                                    </p>
                                                </div>
                                                <input
                                                    value={noticeLink}
                                                    onChange={handlenoticeLink}
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Notice link" readonly />
                                            </div>

                                            {/* Submit Button */}
                                            <button style={{ background: '#11accf' }} className="btn btn-light" type="submit">submit</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noticeadd
