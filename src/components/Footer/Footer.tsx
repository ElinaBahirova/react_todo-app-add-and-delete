import classNames from 'classnames';
import React from 'react';
import { FilterType } from '../../types/FilterType';
// import { Todo } from '../../types/Todo';

interface Props {
  filterBy: (filter: FilterType) => void;
  todosQuantity: number;
  selectedFilter: FilterType;
  removeCompleted: () => void;
  numberOfCompleted: number;
}

export const Footer: React.FC<Props> = ({
  filterBy,
  todosQuantity,
  selectedFilter,
  removeCompleted,
  numberOfCompleted,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="todosCounter">
        {todosQuantity}
        &nbsp;items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          data-cy="FilterLinkAll"
          href="#/"
          className={classNames(
            'filter__link',
            { selected: selectedFilter === FilterType.All },
          )}
          onClick={() => filterBy(FilterType.All)}
        >
          All
        </a>

        <a
          data-cy="FilterLinkActive"
          href="#/active"
          className={classNames(
            'filter__link',
            { selected: selectedFilter === FilterType.Active },
          )}
          onClick={() => filterBy(FilterType.Active)}
        >
          Active
        </a>
        <a
          data-cy="FilterLinkCompleted"
          href="#/completed"
          className={classNames(
            'filter__link',
            { selected: selectedFilter === FilterType.Completed },
          )}
          onClick={() => filterBy(FilterType.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        data-cy="ClearCompletedButton"
        type="button"
        className="todoapp__clear-completed"
        disabled={!numberOfCompleted}
        onClick={() => removeCompleted()}
      >
        Clear completed
      </button>
    </footer>
  );
};