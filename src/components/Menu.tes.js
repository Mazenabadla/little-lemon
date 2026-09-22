import { render, screen } from '@testing-library/react';
import Menu from './Menu'; 
test('menu', () => {
    render(<Menu setActiveItem="menu"  />);

    const paragraphElement = screen.getAllByText(/Here is a description of this dish./i);

    expect(paragraphElement[0]).toBeInTheDocument();
});

