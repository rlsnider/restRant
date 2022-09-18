const React = require('react');
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>

                <h1>{data.place.name}</h1>
                <h3>{data.cuisines}</h3>
                <div className="row">
                    <div className="col-sm-6" >
                        <img id="showBorder" src={data.place.pic} alt={data.place.name} width="80%" />
                    </div>
                     <div className="col-sm-6">  
                        <h2>Rating</h2>
                        <h2>Description</h2>
                        <p>
                            Located in {data.place.city}, {data.place.state}
                        </p>
                    </div>
                    <div>
                        <h1>Comments</h1>
                    </div>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form action={`/places/${data.id}?_method=DELETE`} method="POST">
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show