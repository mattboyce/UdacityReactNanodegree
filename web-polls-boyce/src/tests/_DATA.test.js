import { jest, describe, expect, it } from '@jest/globals';
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

jest.mock('../utils/_DATA'), () => ({
  ...(jest.requireActual('./myModule.js')),
  otherFn: jest.fn()
});

describe('_getUsers', () => {
  it('will return a list of users', async () => {
    var result = _getUsers();

    expect(result).toEqual(expect.any(Object));
  });

  it('will return a list with valid user properties', async () => {
    _getUsers().then(data => {
      expect(data['sarahedo'].name).toEqual('Sarah Edo');
      expect(data['sarahedo'].password).toEqual('password123');
    });
  });
});

describe('_getQuestions', () => {
  it('will return a list of questions', async () => {
    var result = _getQuestions();

    expect(result).toEqual(expect.any(Object));
  });

  it('will return a list with valid question properties', async () => {
    _getQuestions().then(data => {
      expect(data['8xf0y6ziyjabvozdd253nd'].author).toEqual('sarahedo');
      expect(data['8xf0y6ziyjabvozdd253nd'].id).toEqual('8xf0y6ziyjabvozdd253nd');
    });
  });
});

describe('_saveQuestion', () => {
  it('will successfully return a result object', async () => {
    const question = {
      author: "testAuthor",
      optionOneText: "one",
      optionTwoTest: "two",
    }
    var result = _saveQuestion(question).then(() => {
      expect(result).toEqual(expect.any(Object));
    });
  });

  it('will successfully generate a new id for the question', async () => {
    const question = {
      author: "testAuthor",
      optionOneText: "one",
      optionTwoTest: "two",
    }
    _saveQuestion(question).then(data => {
      expect(data.id).toEqual(expect.any(String));
    });
  });

  it('will successfully add a question', async () => {
    const question = {
      author: "testAuthor",
      optionOneText: "one",
      optionTwoTest: "two",
    }
    _getQuestions().then(questions => {
      const questionCountBefore = questions.values().length;

      _saveQuestion(question).then(data => {
        const questionCountAfter = data.values().length;
        expect(questionCountAfter).toEqual(questionCountBefore + 1);
      });
    });
  });
});

describe('_saveQuestionAnswer', () => {
  it('will successfully return a result object', async () => {
    const authUser = "testUser";
    const id = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionOne";
    var result = _saveQuestionAnswer(authUser, id, answer).then(() => {
      expect(result).toEqual(expect.any(Object));
    });
  });

  it('will successfully add an answer to the question', async () => {
    const authUser = "testUser";
    const id = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionOne";

    _saveQuestionAnswer(authUser, id, answer);

    _getQuestions().then((data) => {
      const usersAnswerWasRecorded = data[id].optionOne.votes.includes(authUser);
      expect(usersAnswerWasRecorded).toEqual(true);
    });
  });
});