import { Model, RelationExpression } from 'objection';
import { basePath } from '../helpers';
import { CustomQueryBuilder } from './QueryBuilder';

export class BaseModel extends Model {
  readonly id: number;

  // custom query builder
  QueryBuilderType!: CustomQueryBuilder<this>;
  static QueryBuilder = CustomQueryBuilder;

  // query constraints
  static useLimitInFirst = true;
  static modulePaths = [];

  static setModulePaths(modules: string[]) {
    this.modulePaths = modules;
  }

  static get modelPaths() {
    const root = basePath();
    return BaseModel.modulePaths.map((m) => `${root}dist/src/${m}/models`);
  }

  async fetchRelation(expression: RelationExpression<any>, options = {}) {
    if (this[expression.toString()]) return this;
    await this.$fetchGraph(expression, options);
    return this;
  }
}
