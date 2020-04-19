{
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": ["react","import", "jsx-a11y"],
  "rules": {
      "react/prop-types": 0,
      "no-console": 1
  },
  "settings": {
      "react": {
          "version": "detect"
      }
  }
};
