export default function Footer() {


    const footerMenu = [

        {
            id: 1,
            title: 'Menu',
            links: [
                {
                    id: 1,
                    text: 'Home',
                    link: '/'
                },
                {
                    id: 2,
                    text: 'Contacts',
                    link: '/contacts'
                }
            ]
        },
        {
            id: 2,
            title: 'Legal',
            links: [
                {
                    id: 1,
                    text: 'Pravasy policy',
                    link: '/'
                },
                {
                    id: 2,
                    text: 'Terms and Condiction',
                    link: '/'
                }
            ]
        }
    ]

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg3">
                        <div className="col">
                            <h3>Films Reviews App</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium in magni minus veniam mollitia! Omnis, repellendus laborum? Qui illum dicta provident ratione eum aliquid rem quod corporis, impedit nam a.</p>
                        </div>
                        {
                            footerMenu.map(footerMenu =>

                                <div className="col" key={footerMenu.id}>
                                    <h3>{footerMenu.title} </h3>
                                    <ul className="list-unstyled">
                                        {
                                            footerMenu?.links.map(item =>

                                                <li key={item.id}><a href={item.link}>{item.text}</a></li>
                                            )}

                                    </ul>
                                </div>
                            )}
                    </div>
                </div>
            </footer>
        </>
    )
}