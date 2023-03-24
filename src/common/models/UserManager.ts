import { BaseModel } from "src/core/db";

export class UserManager extends BaseModel {
  static tableName = 'user_manager';

  managerId: number;
  userId: number;

  static relationMappings = {
    userDetails: {
      relation: BaseModel.HasManyRelation,
      modelClass: 'User',
      filter: (builder) => builder.where({ 'users.status': 'Y' }),
      join: {
        from: 'user_manager.user_id',
        to: 'users.id'
      }
    }
  }
}
