import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        ignores: ['build/**'],
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2018,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': ts,
            prettier,
        },
        rules: {
            '@typescript-eslint/explicit-member-accessibility': 0,
            '@typescript-eslint/explicit-function-return-type': 0,
            '@typescript-eslint/no-parameter-properties': 0,
            '@typescript-eslint/interface-name-prefix': 0,
            '@typescript-eslint/explicit-module-boundary-types': 0,
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-duplicate-enum-values': 'off',
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    printWidth: 150,
                },
            ],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'no-async-promise-executor': 'off',
            '@typescript-eslint/no-unnecessary-type-constraint': 'off',
            '@typescript-eslint/no-this-alias': 'off',
        },
    },
    prettierConfig,
];
