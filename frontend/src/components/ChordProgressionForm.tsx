import { Button, Col, Form, Row, Stack, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef, FormEvent } from "react";



export function ChordProgressionForm() {
    const keyRef = useRef<HTMLInputElement>(null);
    const styleRef = useRef<HTMLInputElement>(null);
    const instrumentRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e : FormEvent) {
        e.preventDefault()

        // onSubmit({
        //     key : keyRef.current!.value,
        //     style : styleRef.current!.value,
        //     instrument : instrumentRef.current!.value
        // })
    }

    return (
    <>
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="key">
                            <Form.Label>Key</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Key
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">A</Dropdown.Item>
                                    <Dropdown.Item href="#">A#/Bb</Dropdown.Item>
                                    <Dropdown.Item href="#">B</Dropdown.Item>
                                    <Dropdown.Item href="#">C</Dropdown.Item>
                                    <Dropdown.Item href="#">C#/Db</Dropdown.Item>
                                    <Dropdown.Item href="#">D</Dropdown.Item>
                                    <Dropdown.Item href="#">D#/Eb</Dropdown.Item>
                                    <Dropdown.Item href="#">E</Dropdown.Item>
                                    <Dropdown.Item href="#">F</Dropdown.Item>
                                    <Dropdown.Item href="#">F#/Gb</Dropdown.Item>
                                    <Dropdown.Item href="#">G</Dropdown.Item>
                                    <Dropdown.Item href="#">G#/Ab</Dropdown.Item>
                                </Dropdown.Menu>
                             </Dropdown>
                            <Form.Control ref={keyRef} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="style">
                            <Form.Label>Style/Genre</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Style/Genre
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Pop</Dropdown.Item>
                                    <Dropdown.Item href="#">Jazz</Dropdown.Item>
                                    <Dropdown.Item href="#">Blues</Dropdown.Item>
                                    <Dropdown.Item href="#">Rock</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                             <Form.Control ref={styleRef} required />
                        </Form.Group>
                    </Col>
                </Row>  
                <Form.Group controlId="instrument">
                            <Form.Label>Instrument</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Style/Genre
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Guitar</Dropdown.Item>
                                    <Dropdown.Item href="#">Piano</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            <Form.Control ref={instrumentRef} />
                </Form.Group>
                <Stack direction="horizontal" gap={2} className="justify-content-end">
                    <Button type="submit" variant="primary">Save</Button>
                    <Link to="..">
                        <Button type="button" variant="outline-secondary">Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    </>
    )
};

