module.exports = function (api) {
  api.loadSource(async (store) => {
    const apiVersion = '1';
    store.addMetaData('apiVersion', apiVersion);
  });
};
