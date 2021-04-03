import React from 'react'
import Navbar from './Navbar'

function View() {
    return (

        <>
            <Navbar />
            <style>{'body { background-color: #f0f5f1; }'}</style>
            <div className="container my-3">
                <div className="row m-auto">
                    <div className="col-lg-12 col-md-10 col-sm-10 m-auto">
                        <div className="card shadow">
                            <div className="card-body">
                                {/* noticeType */}

                                <div>
                                    <h4 style={{ fontWeight: 'bold' }}>Notice Type</h4>
                                    <button style={{ color: 'blue', fontWeight: 'bold' }} className="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Click here
                                </button>

                                    <div className="collapse" id="collapseExample">
                                        <div class="card card-body">
                                            <h4>Select notice type which type of notice you want to upload.</h4>
                                            <select className="custom-select">
                                                <option value={null}>-Select Option-</option>
                                                <option value="school">School</option>
                                                <option value="college">College</option>
                                                <option value="office">Office</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <hr />
                                {/* noticeTitle */}
                                <div style={{ paddingTop: '10px' }}>
                                    <h4 style={{ fontWeight: 'bold' }}>Notice Title</h4>
                                    <button style={{ color: 'blue', fontWeight: 'bold' }} className="btn" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                        Click here
                                </button>

                                    <div className="collapse" id="collapseExample1">
                                        <div class="card card-body">
                                            <h5>Write your notice title</h5>
                                            <input className="form-control" type="text" placeholder="Notice title" />
                                            <div style={{ paddingTop: '4px' }}>
                                                <button style={{ background: '#eb4d4d', color: 'white' }} className="btn">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {/* noticeDescription */}
                                <div style={{ paddingTop: '10px' }}>
                                    <h4 style={{ fontWeight: 'bold' }}>Notice Description</h4>
                                    <button style={{ color: 'blue', fontWeight: 'bold' }} className="btn" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                        Click here
                                </button>

                                    <div className="collapse" id="collapseExample2">
                                        <div class="card card-body">

                                            <input className="form-control" type="text" placeholder="Notice description" />
                                            <div style={{ paddingTop: '4px' }}>
                                                <button style={{ background: '#eb4d4d', color: 'white' }} className="btn">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {/* noticeDate */}
                                <div style={{ paddingTop: '10px' }}>
                                    <h4 style={{ fontWeight: 'bold' }}>Notice Date</h4>
                                    <button style={{ color: 'blue', fontWeight: 'bold' }} className="btn" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                        Click here
                                </button>

                                    <div class="collapse" id="collapseExample3">
                                        <div class="card card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                    </div>
                                </div>
                                <hr />
                                {/* noticeFile */}
                                <div style={{ paddingTop: '10px' }}>
                                    <h4 style={{ fontWeight: 'bold' }}>Notice File</h4>
                                    <button style={{ color: 'blue', fontWeight: 'bold' }} className="btn" type="button" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                        Click here
                                        </button>
                                    <div class="collapse" id="collapseExample4">
                                        <div class="card card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                    </div>
                                </div>
                                <hr />
                                {/* noticeLink */}
                                <div style={{ paddingTop: '10px' }}>
                                    <h4 style={{ fontWeight: 'bold' }}>Notice Link</h4>
                                    <button style={{ color: 'blue', fontWeight: 'bold' }} className="btn" type="button" data-toggle="collapse" data-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                                        Click here
                                        </button>
                                    <div class="collapse" id="collapseExample5">
                                        <div class="card card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                    </div>
                                </div>
                                <hr />

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div style={{ background: '#21cfac' }} class="card">
                                            <div class="card-body">
                                                <h5 style={{ fontWeight: 'bold', color: 'white' }} class="card-title">NOTICE FILE</h5>
                                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <button style={{ background: '#139c7e' }} className="btn btn-light">Click here</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">

                                        <div style={{ background: '#32b8c9' }} class="card">
                                            <div class="card-body">
                                                <h5 style={{ fontWeight: 'bold', color: 'white' }} class="card-title">NOTICE LINK</h5>
                                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <button style={{ background: '#3a72e0' }} className="btn btn-light">Click here</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View
