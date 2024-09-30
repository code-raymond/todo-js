import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from "../../../utils/db";

// Define the attributes for Todo
interface TodoAttributes {
  id: number;
  title: string;
  completed: boolean;
}

// Define a type for creating new Todo items (since id is optional at creation time)
interface TodoCreationAttributes extends Optional<TodoAttributes, 'id'> {}

// Define the Todo model extending Sequelize's Model class
class Todo extends Model<TodoAttributes, TodoCreationAttributes> implements TodoAttributes {
  public id!: number;
  public title!: string;
  public completed!: boolean;
}

// Initialize the model (schema)
Todo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Title is required',
        },
      },
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize, // Pass the sequelize instance
    tableName: 'todos',
    timestamps: true,
  }
);

export { Todo };
