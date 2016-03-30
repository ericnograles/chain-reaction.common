import { memes } from './meme';

import {
  FIND_MEMES
} from '../actions';

import expect from 'expect';

describe('meme reducer', () => {
  it('should handle new memes', () => {
    var newMemes = [
      'http://cdn.meme.am/instances/500x/13734123.jpg',
      'http://s2.quickmeme.com/img/6d/6d68ad25beab779467cf2e95c7c3de742f4df17ad4e38176a71886f566816424.jpg',
      'http://cdn.pophangover.com/wp-content/uploads/2013/12/mem2.png',
      'http://memesvault.com/wp-content/uploads/Best-Meme-03.jpg',
      'http://memesvault.com/wp-content/uploads/I-Have-No-Idea-What-Im-Doing-Dog-02.jpg'
    ];
    var state = memes(null, {type: FIND_MEMES, memes: newMemes});
    expect(state.results.length).toBe(newMemes.length, 'Invalid memes');
  });

  it('should handle an error', () => {
    var error = new Error('Oh noes!');
    var state = memes(null, {type: FIND_MEMES, error: error});
    expect(state.error).toBe(error, 'Invalid error');
  });
});