import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Square from './square';

const onClick = jest.fn();

test('click on the Square component', () => {
  const { container, rerender } = render(<Square onClick={onClick} value={null} pos={1} />);

  expect(container.firstChild).toHaveTextContent('');

  rerender(<Square onClick={onClick} value={1} pos={1} />)

  const button = screen.getByRole('button', { name: /square-1/})
  userEvent.click(button)

  expect(container.firstChild).toHaveTextContent('1')
  expect(onClick).toHaveBeenCalledTimes(1);
})
