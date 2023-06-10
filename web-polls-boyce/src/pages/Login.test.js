import React from 'react';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Login from './Login';

const mockStore = configureStore([]);

describe('NameForm', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            authedUser: '',
            dispatch: () => { },
            users: {
                sarahedo: {
                    id: 'sarahedo',
                    password: 'password123',
                    name: 'Sarah Edo',
                    avatarURL: null,
                    answers: {
                        "8xf0y6ziyjabvozdd253nd": 'optionOne',
                        "6ni6ok3ym7mf1p33lnez": 'optionOne',
                        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                        "loxhs1bqm25b708cmbf3g": 'optionTwo'
                    },
                    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
                }
            },
        });
    });

    it('will expand the dropdown chen clicked', () => {
        var component = render(<Login store={store} />);

        var testUserSelect = component.getByTestId('testUserSelect');

        fireEvent.change(testUserSelect, {
            target: { value: "sarahedo" },
          });

        expect(testUserSelect.value).toEqual("sarahedo");
    });
});