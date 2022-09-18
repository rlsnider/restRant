const React = require('react')
const Def = require('./default')

function home () {
    return (
    <Def>
        <main>
            <div id="homepage">
                <h1>REST-Rant</h1>
                    <div>
                        <img src="/images/ChiaFruit.jpg" alt="Chia Fruit Shake" width="50%" /><br />
                        <span>Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="//unsplash.com/photos/MsTOg6rhRVk">Unsplash</a></span>
                    </div>
            </div>
        </main>
    </Def>
    )
}
 
module.exports = home