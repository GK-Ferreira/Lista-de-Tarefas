// *...importando componentes*s
import Input from './components/Input';
import Button from './components/Button';
import Task from './components/Task';
import Modal from './components/Modal';

//*...importando useState*
import { useState } from 'react';

//*...importando componentes estilizados*
import { StyledTasks } from './styles/Tasks.style'
import { StyledWrapper } from './styles/Wrapper.style';
import { StyledBox } from './styles/Box.style';
import { StyledTitle } from './styles/Title.style';
import { StyledAlignHeader } from './styles/AlignHeader.style'

function App() {

  //*...Constantes*
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const [showModal,setShowModal] = useState(false);

  //*...Funções*

  const StateModal = () => {
    setShowModal(false);
  }

  //*... função para marcar a tarefa como feita*
  const ToggleChecked = (id, checked) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const newTodos = todos;
    newTodos[index].checked = !checked;
    setTodos([...newTodos]);
  }
  //*...Função para deletar uma tarefa*
  const DeleteToDo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  }

  //*...função para criar uma tarefa*
  const toDoCreate = (text) => {
    if (input === "") {
      setShowModal(true);
      return;
    }

    //*...criando objeto para cada Tarefa*
    const todoObj = { text: text, id: id, checked: false };
    setId(id + 1);
    toDoHandler(todoObj)
    setInput('');
  }
  //*...adiciondo tarefa ao array que já existe
  const toDoHandler = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <StyledWrapper>
      <StyledBox>
        <StyledTitle>LISTA DE TAREFAS</StyledTitle>
        <StyledAlignHeader>
          <Input
            value={input}
            onchange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={() => toDoCreate(input)}
          />
        </StyledAlignHeader>

        <StyledTasks>
          {todos.map((todo) => (
            <Task
              key={todo.id}
              tarefa={todo.text}
              id={todo.id}
              checked={todo.checked}
              togglefunction={ToggleChecked}
              functiondelete={DeleteToDo}
            />
          ))}
        </StyledTasks>
      </StyledBox>
      {(showModal) && (
        <Modal statemodal={StateModal} />
      )}
    </StyledWrapper >
  )
}

export default App
