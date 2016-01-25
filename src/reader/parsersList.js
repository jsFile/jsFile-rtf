import rquote from './controlWordParsers/special/rquote';
import rdblquote from './controlWordParsers/special/rdblquote';
import lquote from './controlWordParsers/special/lquote';
import ldblquote from './controlWordParsers/special/ldblquote';

import ab from './controlWordParsers/formatting/ab';
import b from './controlWordParsers/formatting/b';
import i from './controlWordParsers/formatting/i';
import ul from './controlWordParsers/formatting/ul';

import listtext from './controlWordParsers/list/listtext';

export default {
    ab,
    rquote,
    rdblquote,
    lquote,
    ldblquote,

    listtext,

    b,
    i,
    ul
};