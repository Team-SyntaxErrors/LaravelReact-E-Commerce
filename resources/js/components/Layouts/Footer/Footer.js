import React, {Fragment} from 'react'

function Footer() {
    return (
        <Fragment>
            <footer className="footer">
                <div className="w-100 clearfix">
                    <span className="text-center text-sm-left d-md-inline-block">Copyright © 2018 ThemeKit v2.0. All Rights Reserved.</span>
                    <span className="float-none float-sm-right mt-1 mt-sm-0 text-center">Crafted with <i
                        className="fa fa-heart text-danger"/> by <a href="http://lavalite.org/" className="text-dark"
                                                                    target="_blank">Lavalite</a></span>
                </div>
            </footer>

        </Fragment>
    )
}

export default Footer
