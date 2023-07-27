import { useState, useEffect } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ToDoList = () => {
  const[text, setText] = useState("");
  const[list, setList] = useState([]);
  const[buttonDisabled, setButtonDisabled] = useState(true);

  const agregarItem = (item) => {
    setList((prevList) => [...prevList, item]);
  };

  const eliminarItem = (item, id) => {
    setList((prevList) => prevList.filter((el) => el !== item));
  };

  const handleClick = () => {
    agregarItem(text);
    text = "";
  };

  const handleChange = (event) => {
    setText(event.target.value);
    setButtonDisabled(text === "");
  };

  const handleSubmit = () => {
    const newItem = text.trim().replace(/ /g, "");
    if (newItem !== "" && newItem.length > 0 && !list.includes(newItem)) {
      setList([...list, newItem]);
      setText("");
    }
  };

  useEffect(() => {
    setButtonDisabled(text === "");
  }, [text]);

  return (
    <div className='container'>
      <div className='root'>
        <h1>Lista de tareas</h1>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Nombre de usuario del destinatario"
              aria-label="Nombre de usuario del destinatario"
              aria-describedby="basic-addon2"
              onChange={(e)=> setText(e.target.value)}
            />
      </InputGroup>
        
      
        <Button variant="info" onClick={handleClick} disabled={buttonDisabled}>Añadir</Button>
        
        <Card>
      <Card.Header >Tareas pendientes</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <ul>
          {list.map((item) => (
            <li key={item}>
              {item}
              
              <button variant="link" onClick={() => eliminarItem(item)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <ul>
        <li key="1">Comprar pan<button variant="link" onClick={() => eliminarItem(1)}>Eliminar</button></li>
          <li key="2">Ver anime<button variant="link" onClick={() => eliminarItem(2)}>Eliminar</button></li>
          <li key="3">salir a comer con los panas uwu <button variant="link" onClick={() => eliminarItem(3)}>Eliminar</button></li>
        </ul>
      </Card.Body>
    </Card>

      </div>
    </div>
      
  );
}

export default ToDoList;