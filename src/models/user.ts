import { Sequelize, DataTypes } from 'sequelize';

export interface UserAttributes {
    name ? : string;
    email ? : string;
    password ? : string;
    token ? : string;
    roleId ? : number;
}

export interface UserInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    name: string;
    email: string;
    password: string;
    token: string;
    roleId: number;
}

export default function defineUser(sequelize: Sequelize, DataTypes: DataTypes): any {
    var User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models: any) {
                User.belongsTo(models.Role, {
                    foreignKey: 'roleId',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                });
            }
        }
    });

    return User;
};
