const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
                <link rel="stylesheet" href="/CSS/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a> 
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <footer>
                    <nav>
                        <ul>
                            <li>Author: Ramona Snider</li>
                            <li>Website: <a href="https://makemyinspiration.com">Mona's Inspiration</a></li>
                        </ul>
                    </nav>
                </footer>
            </body>
        </html>
    )
}
module.exports = Def