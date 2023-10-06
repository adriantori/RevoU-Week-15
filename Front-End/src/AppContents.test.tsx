import { render, screen } from '@testing-library/react';
import AppContents from './AppContents';

describe('testing AppContents', () => {
    test('Buttons rendered correctly', () => {
        render(<AppContents />);
        const textGet = screen.getByText('GET')
        expect(textGet).toBeDefined();
        const textPost = screen.getByText('POST')
        expect(textPost).toBeDefined();
        const textPut = screen.getByText('PUT')
        expect(textPut).toBeDefined();
        const textDelete = screen.getByText('DELETE')
        expect(textDelete).toBeDefined();
    });
});
