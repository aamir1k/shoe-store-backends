module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});

// 9e740057b08f7ebf04740743e090141d8a3389070069de174d6a08dc341e0e1075579f0e8
// 23ab10209b9e3f805b23b572ee5af6cac93592c623151bc189a4d4c7c0f0a333c2bab06c15ab0c12f0e6f67
// a2ce31bd6c53a9feae4c772403edec9b9a804fedb9ee3b4090ca009086f5dae8f7be294cea603613d0c4fc23378be3f2
