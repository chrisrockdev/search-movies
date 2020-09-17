import React from 'react';
import './index.css';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4" style={{float: "right"}}>
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="search">
                            <input type="text" placeholder="Pesquise seu filme" onChange={props.handleChange} />
                            <i className="material-icons">search</i>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchArea;