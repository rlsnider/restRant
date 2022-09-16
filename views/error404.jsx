const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <div id='errorDivOne'>
                    <h1>404: PAGE NOT FOUND</h1>
                
                <img src="/images/error404.jpg" alt="Ang(dog) looking at you" width='50%' />
                <p>Oops, sorry, we can't find this page!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404