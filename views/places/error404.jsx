const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <div id="errorTest">
                    <h1>404: PAGE NOT FOUND</h1>
                </div>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404