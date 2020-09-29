module.exports = app => {
  const { STRING, INTEGER, DATE, Model, TEXT } = app.Sequelize;

  class Article extends Model {
  }

  Article.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    content: TEXT,
    author_id: INTEGER,
    reads: INTEGER,
    created_at: DATE,
    deleted_at: DATE,
    updated_at: DATE,
  }, { sequelize: app.model, modelName: 'article' });
  return Article;
};
