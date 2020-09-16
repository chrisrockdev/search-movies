import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="div row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="search">
                            <input type="text" placeholder="Pesquise seu filme" onChange={props.handleChange} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchArea;