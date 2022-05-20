import { Badge, Box, Button, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { Todo } from '../@types/custom';
import { TodosContext, TodosContextType, TODO_STATUSES } from '../context/TodosContext';
import TEST_IDS from '../testIds';

export default function TodoList() {
  const { todos, updateTodoStatus } = useContext(TodosContext) as TodosContextType;

  const cycleTodoStatus = (todoId: Todo['_id'], currentStatus: Todo['status']) => {
    const currentIndex = TODO_STATUSES.indexOf(currentStatus);
    const nextIndex = TODO_STATUSES.length === (currentIndex + 1) ? 0 : currentIndex + 1;
    const newStatus = TODO_STATUSES[nextIndex] as Todo['status'];

    updateTodoStatus(todoId, newStatus);
  };

  if (!todos || !todos.length) {
    return (
      <Flex
        justifyContent="center"
        borderWidth="1px"
        borderRadius="lg"
        p="3"
      >
        <Text>Sem tarefas. Adicione uma!</Text>
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      data-testid={ TEST_IDS.todoList }
      align="flex-start"
      justifyContent="space-between"
      borderWidth="1px"
      borderRadius="lg"
      p="2"
    >
      { todos.map(({ _id, description, status, createdAt }) => (
        <HStack
          key={ _id }
          justifyContent="space-between"
          w="100%"
          p="1"
        >
          <Badge>{new Date(createdAt).toLocaleDateString()}</Badge>
          <Text>{description}</Text>
          <Spacer />
          <Button
            size="xs"
            onClick={ () => cycleTodoStatus(_id, status) }
          >
            {status}
          </Button>
        </HStack>
      ))}
    </Flex>
  );
}
