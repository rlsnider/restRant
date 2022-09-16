const React = require('react')
const Def = require('../default')

function home () {
    return (
    <Def>
        <main>
            <h1>REST-Rant</h1>
            <div>
                <div>
                <img src="/images/ChiaFruit.jpg" alt="Chia Fruit Shake" width="40%" />
                <span>Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="//unsplash.com/photos/MsTOg6rhRVk">Unsplash</a></span>
                </div>
            </div>
            <a href="/places">
                <button className="btn btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
    )
}
 
module.exports = home