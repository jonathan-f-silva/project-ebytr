import { useContext, useState } from 'react';
import { TodosContextType } from '../@types/custom';
import { TodosContext } from '../context/TodosContext';

export default function TodosHeader() {
  const { addTodo } = useContext(TodosContext) as TodosContextType;
  const [inputText, setInputText] = useState('');

  const sendTodo = () => {
    addTodo(inputText);
    setInputText('');
  };

  return (
    <div>
      <input
        placeholder="Digite uma tarefa"
        onChange={ (e) => setInputText(e.target.value) }
        value={ inputText }
      />
      <button
        type="button"
        onClick={ sendTodo }
      >
        Adicionar tarefa
      </button>
    </div>
  );
}
