import { connect } from 'react-redux';
import Sidebar from '@components/Sidebar';
import TodoListsActions from '@store/TodoLists/actions';


const mapStateToProps = ({ todolists }) => ({
  todolists: todolists.sort((a, b) => {
    const [aLower, bLower] = [a.name, b.name].map((s) => s.toLowerCase());
    if (aLower > bLower) return 1;
    if (aLower < bLower) return -1;
    return 0;
  }),
});
const mapDispatchToProps = {
  addTodoList: TodoListsActions.addTodoList,
  selectTodoList: TodoListsActions.selectTodoList,
  renameTodoList: TodoListsActions.renameTodoList,
  removeTodoList: TodoListsActions.removeTodoList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
