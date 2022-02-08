module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'prettier'
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'semi': [1, 'always'],
        'complexity': [1,7],
        'max-statements': [1,8],
        'max-depth': [1,2],
        'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used'}],
        'new-cap': 0,
        'strict': 0,
        'no-underscore-dangle': 0,
        'no-use-before-define': 0,
        'eol-last': 0,
        'quotes': [2, 'single'],
      }
};
