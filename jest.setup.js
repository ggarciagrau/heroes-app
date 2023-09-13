module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      // Mapeo para tus importaciones de estilos y assets, si es necesario
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
  };
  