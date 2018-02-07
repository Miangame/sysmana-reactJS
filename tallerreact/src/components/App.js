import React, { Component } from 'react';
import '../assets/index.css';
import NotasList from '../components/NotasList';
import NotasForm from '../components/NotasForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [
        { titulo: "Preparar Symana 2017-18", tarea: "¡Ésta Sysmana va a ser la mejor!" },
        { titulo: "Hacer tarea DIWEB", tarea: "La mejor asignatura de todas :)" },
        { titulo: "Llamar a mi madre", tarea: "Que siempre se me olvida." },
      ]
    };
  }

  handleOnAddNota(event) {
    event.preventDefault();
    let nota = {
      titulo: event.target.titulo.value,
      tarea: event.target.tarea.value,
    };
    if (event.target.titulo.value !== "" && event.target.tarea.value !== "") {
      this.setState({
        notas: this.state.notas.concat([nota])
      });
    }

  }

  render() {
    return (
      <main id="main">
        <NotasForm onAddNota={this.handleOnAddNota.bind(this)} />

        <section id="sectionViewNotas">
          <NotasList notas={this.state.notas} />
        </section>
      </main>
    );
  }
}

export default App;
