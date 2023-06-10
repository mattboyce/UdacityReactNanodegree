import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react'
import { Username } from './Username';

it('renders without crashing', () => {
    const component = render(<Username userName="testName" />);
    expect(component).toMatchSnapshot();
});

describe('Username', () => {
    it('renders without crashing', () => {
        const component = render(<Username userName="testName" />);
        expect(component).toMatchSnapshot();
    });

});