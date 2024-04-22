import React from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <Container className="bg-img">
            <div className="d-flex justify-content-between align-items-center py-3">
                <div>
                    <h1>Poetry Journal</h1>
                    <ButtonGroup>
                        <Link to="/">
                            <Button variant="dark">Home</Button>
                        </Link>
                        <Link to="/GalleryPage">
                            <Button variant="dark">Gallery</Button>
                        </Link>
                        <Link to="/CreatePage">
                            <Button variant="dark">Create</Button>
                        </Link>
                        
                    </ButtonGroup>
                </div>
                <div>
                    {/* For future use: Add additional elements or buttons here if needed*/}
                </div>
            </div>
        </Container>
    );
}

export default Header;